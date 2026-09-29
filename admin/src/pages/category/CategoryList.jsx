import React, { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { GrEdit } from "react-icons/gr";
import { FaRegEye } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";

const initialData = [
  { id: "1", amount: 100, status: "pending", email: "alice@example.com" },
  { id: "2", amount: 125, status: "success", email: "bob@example.com" },
  { id: "3", amount: 250, status: "success", email: "charlie@example.com" },
  { id: "4", amount: 45, status: "failed", email: "david@example.com" },
  { id: "5", amount: 300, status: "pending", email: "eva@example.com" },
  { id: "6", amount: 80, status: "success", email: "frank@example.com" },
];

function CategoryList() {
  // 1. Local UI State Controls
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  // 2. Filter data based on search term
  const filteredData = useMemo(() => {
    return initialData.filter(
      (item) =>
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.status.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  // 3. Paginate the filtered results
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredData.slice(start, end);
  }, [filteredData, currentPage, rowsPerPage]);

  // Reset pagination if user types a search query
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  // Handle items per page adjustment
  const handleRowsPerPageChange = (value) => {
    setRowsPerPage(Number(value));
    setCurrentPage(1);
  };

  return (
    <div className="p-4 pt-0">
      <div className="flex flex-row pb-4">
        <h2 className="text-[18px] font-medium">Category</h2>
      </div>
      <div className="py-6 px-4  space-y-4 border rounded-lg">
        {/* Search Input Bar */}
        <div className="flex items-center justify-between gap-4">
          <Input
            placeholder="Filter by email or status..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="max-w-sm"
          />
        </div>

        {/* Table Component Structure */}
        <div className="rounded-md border">
          <Table>
            <TableHeader className="bg-gray-100 text-[14px]">
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead>
                  <div className="flex flex-row justify-end pr-4">Actions</div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.length > 0 ? (
                paginatedData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="font-medium capitalize">
                      image
                    </TableCell>
                    <TableCell className="font-medium capitalize">
                      This is demo title
                    </TableCell>
                    <TableCell>T-Shirt</TableCell>
                    <TableCell className="text-right">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(row.amount)}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-row gap-3 justify-end pr-4">
                        <GrEdit size={14} />
                        <FaRegEye size={14} />
                        <IoTrashOutline size={14} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={3}
                    className="h-24 text-center text-muted-foreground"
                  >
                    No matching results found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination Controls Footer */}
        <div className="flex items-center  px-2">
          <div className="w-[50%]">
            <div className="text-sm text-muted-foreground">
              Page {filteredData.length === 0 ? 0 : currentPage} of {totalPages}
            </div>
          </div>

          <div className="w-[50%] flex flex-row justify-end gap-5">
            {/* Rows per Page Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                Rows per page:
              </span>
              <Select
                value={String(rowsPerPage)}
                onValueChange={handleRowsPerPageChange}
              >
                <SelectTrigger className="w-[70px]">
                  <SelectValue placeholder={rowsPerPage} />
                </SelectTrigger>
                <SelectContent side="top">
                  {[2, 5, 10].map((pageSize) => (
                    <SelectItem key={pageSize} value={String(pageSize)}>
                      {pageSize}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1 || filteredData.length === 0}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={
                  currentPage === totalPages || filteredData.length === 0
                }
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
