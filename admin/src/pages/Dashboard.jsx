import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TbTrendingUp } from "react-icons/tb";

// import { useTable } from "@tanstack/react-table";

// import {
//   columnFilteringFeature,
//   columnVisibilityFeature,
//   createFilteredRowModel,
//   createPaginatedRowModel,
//   createSortedRowModel,
//   filterFn_includesString,
//   rowPaginationFeature,
//   rowSelectionFeature,
//   rowSortingFeature,
//   sortFn_alphanumeric,
//   sortFn_text,
//   tableFeatures,
// } from "@tanstack/react-table";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// import { Button } from "@/components/ui/button";

// // 1. Columns configuration defined locally inside the same file
// const columns = [
//   {
//     accessorKey: "fullname",
//     header: "Full Name",
//   },
//   {
//     accessorKey: "status",
//     header: "Status",
//   },
//   {
//     accessorKey: "email",
//     header: "Email",
//   },
//   {
//     accessorKey: "amount",
//     header: "Amount",
//     cell: ({ row }) => {
//       const amount = parseFloat(row.getValue("amount"));
//       const formatted = new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//       }).format(amount);
//       return <div className="text-right font-medium">{formatted}</div>;
//     },
//   },
// ];

// // 2. Mock state data defined locally
// const data = [
//   {
//     id: "728ed52f",
//     amount: 100,
//     status: "pending",
//     email: "m@example.com",
//     fullname: "John Doe",
//   },
//   { id: "489e1d5a", amount: 125, status: "success", email: "k@example.com" },
// ];

// // 3. Register the features this table actually uses.
// // In v9 features are opt-in: e.g. `row.getVisibleCells()` only exists
// // once `columnVisibilityFeature` is registered. Declare each prerequisite
// // feature before its dependent row-model slot.
// const features = tableFeatures({
//   columnVisibilityFeature,
//   columnFilteringFeature,
//   rowSortingFeature,
//   rowSelectionFeature,
//   rowPaginationFeature,
//   filteredRowModel: createFilteredRowModel(),
//   sortedRowModel: createSortedRowModel(),
//   paginatedRowModel: createPaginatedRowModel(),
//   filterFns: { includesString: filterFn_includesString },
//   sortFns: { alphanumeric: sortFn_alphanumeric, text: sortFn_text },
// });

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

const initialData = [
  { id: "1", amount: 100, status: "pending", email: "alice@example.com" },
  { id: "2", amount: 125, status: "success", email: "bob@example.com" },
  { id: "3", amount: 250, status: "success", email: "charlie@example.com" },
  { id: "4", amount: 45, status: "failed", email: "david@example.com" },
  { id: "5", amount: 300, status: "pending", email: "eva@example.com" },
  { id: "6", amount: 80, status: "success", email: "frank@example.com" },
];

// ------------------- Chart ---------------------

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An interactive area chart";

const chartData = [
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-05", desktop: 373, mobile: 290 },
  { date: "2024-04-06", desktop: 301, mobile: 340 },
  { date: "2024-04-07", desktop: 245, mobile: 180 },
  { date: "2024-04-08", desktop: 409, mobile: 320 },
  { date: "2024-04-09", desktop: 59, mobile: 110 },
  { date: "2024-04-10", desktop: 261, mobile: 190 },
  { date: "2024-04-11", desktop: 327, mobile: 350 },
  { date: "2024-04-12", desktop: 292, mobile: 210 },
  { date: "2024-04-13", desktop: 342, mobile: 380 },
  { date: "2024-04-14", desktop: 137, mobile: 220 },
  { date: "2024-04-15", desktop: 120, mobile: 170 },
  { date: "2024-04-16", desktop: 138, mobile: 190 },
  { date: "2024-04-17", desktop: 446, mobile: 360 },
  { date: "2024-04-18", desktop: 364, mobile: 410 },
  { date: "2024-04-19", desktop: 243, mobile: 180 },
  { date: "2024-04-20", desktop: 89, mobile: 150 },
  { date: "2024-04-21", desktop: 137, mobile: 200 },
  { date: "2024-04-22", desktop: 224, mobile: 170 },
  { date: "2024-04-23", desktop: 138, mobile: 230 },
  { date: "2024-04-24", desktop: 387, mobile: 290 },
  { date: "2024-04-25", desktop: 215, mobile: 250 },
  { date: "2024-04-26", desktop: 75, mobile: 130 },
  { date: "2024-04-27", desktop: 383, mobile: 420 },
  { date: "2024-04-28", desktop: 122, mobile: 180 },
  { date: "2024-04-29", desktop: 315, mobile: 240 },
  { date: "2024-04-30", desktop: 454, mobile: 380 },
  { date: "2024-05-01", desktop: 165, mobile: 220 },
  { date: "2024-05-02", desktop: 293, mobile: 310 },
  { date: "2024-05-03", desktop: 247, mobile: 190 },
  { date: "2024-05-04", desktop: 385, mobile: 420 },
  { date: "2024-05-05", desktop: 481, mobile: 390 },
  { date: "2024-05-06", desktop: 498, mobile: 520 },
  { date: "2024-05-07", desktop: 388, mobile: 300 },
  { date: "2024-05-08", desktop: 149, mobile: 210 },
  { date: "2024-05-09", desktop: 227, mobile: 180 },
  { date: "2024-05-10", desktop: 293, mobile: 330 },
  { date: "2024-05-11", desktop: 335, mobile: 270 },
  { date: "2024-05-12", desktop: 197, mobile: 240 },
  { date: "2024-05-13", desktop: 197, mobile: 160 },
  { date: "2024-05-14", desktop: 448, mobile: 490 },
  { date: "2024-05-15", desktop: 473, mobile: 380 },
  { date: "2024-05-16", desktop: 338, mobile: 400 },
  { date: "2024-05-17", desktop: 499, mobile: 420 },
  { date: "2024-05-18", desktop: 315, mobile: 350 },
  { date: "2024-05-19", desktop: 235, mobile: 180 },
  { date: "2024-05-20", desktop: 177, mobile: 230 },
  { date: "2024-05-21", desktop: 82, mobile: 140 },
  { date: "2024-05-22", desktop: 81, mobile: 120 },
  { date: "2024-05-23", desktop: 252, mobile: 290 },
  { date: "2024-05-24", desktop: 294, mobile: 220 },
  { date: "2024-05-25", desktop: 201, mobile: 250 },
  { date: "2024-05-26", desktop: 213, mobile: 170 },
  { date: "2024-05-27", desktop: 420, mobile: 460 },
  { date: "2024-05-28", desktop: 233, mobile: 190 },
  { date: "2024-05-29", desktop: 78, mobile: 130 },
  { date: "2024-05-30", desktop: 340, mobile: 280 },
  { date: "2024-05-31", desktop: 178, mobile: 230 },
  { date: "2024-06-01", desktop: 178, mobile: 200 },
  { date: "2024-06-02", desktop: 470, mobile: 410 },
  { date: "2024-06-03", desktop: 103, mobile: 160 },
  { date: "2024-06-04", desktop: 439, mobile: 380 },
  { date: "2024-06-05", desktop: 88, mobile: 140 },
  { date: "2024-06-06", desktop: 294, mobile: 250 },
  { date: "2024-06-07", desktop: 323, mobile: 370 },
  { date: "2024-06-08", desktop: 385, mobile: 320 },
  { date: "2024-06-09", desktop: 438, mobile: 480 },
  { date: "2024-06-10", desktop: 155, mobile: 200 },
  { date: "2024-06-11", desktop: 92, mobile: 150 },
  { date: "2024-06-12", desktop: 492, mobile: 420 },
  { date: "2024-06-13", desktop: 81, mobile: 130 },
  { date: "2024-06-14", desktop: 426, mobile: 380 },
  { date: "2024-06-15", desktop: 307, mobile: 350 },
  { date: "2024-06-16", desktop: 371, mobile: 310 },
  { date: "2024-06-17", desktop: 475, mobile: 520 },
  { date: "2024-06-18", desktop: 107, mobile: 170 },
  { date: "2024-06-19", desktop: 341, mobile: 290 },
  { date: "2024-06-20", desktop: 408, mobile: 450 },
  { date: "2024-06-21", desktop: 169, mobile: 210 },
  { date: "2024-06-22", desktop: 317, mobile: 270 },
  { date: "2024-06-23", desktop: 480, mobile: 530 },
  { date: "2024-06-24", desktop: 132, mobile: 180 },
  { date: "2024-06-25", desktop: 141, mobile: 190 },
  { date: "2024-06-26", desktop: 434, mobile: 380 },
  { date: "2024-06-27", desktop: 448, mobile: 490 },
  { date: "2024-06-28", desktop: 149, mobile: 200 },
  { date: "2024-06-29", desktop: 103, mobile: 160 },
  { date: "2024-06-30", desktop: 446, mobile: 400 },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
    // color: "var(--chart-1)",
    color: "#8ec5ff",
  },
  mobile: {
    label: "Mobile",
    // color: "var(--chart-2)",
    color: "#2b7fff",
  },
};
// ------------------- Chart end here ---------------------

function Dashboard() {
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

  // --------------------- Chart ---------------------------
  const [timeRange, setTimeRange] = React.useState("90d");
  const filteredChartData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  // --------------------- Chart end here ------------------

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-4">
        <Card className="@container/card bg-[#f1f1f1]">
          <CardHeader>
            <CardDescription>Total Revenue</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              $1,250.00
            </CardTitle>
            <CardAction>
              <Badge variant="outline">
                <TbTrendingUp strokeWidth={2} />
                +12.5%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Trending up this month <TbTrendingUp size={16} />
            </div>
            <div className="text-muted-foreground">
              Visitors for the last 6 months
            </div>
          </CardFooter>
        </Card>

        <Card className="@container/card bg-[#f1f1f1]">
          <CardHeader>
            <CardDescription>Total Revenue</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              $1,250.00
            </CardTitle>
            <CardAction>
              <Badge variant="outline">
                <TbTrendingUp strokeWidth={2} />
                +12.5%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Trending up this month <TbTrendingUp size={16} />
            </div>
            <div className="text-muted-foreground">
              Visitors for the last 6 months
            </div>
          </CardFooter>
        </Card>

        <Card className="@container/card bg-[#f1f1f1]">
          <CardHeader>
            <CardDescription>Total Revenue</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              $1,250.00
            </CardTitle>
            <CardAction>
              <Badge variant="outline">
                <TbTrendingUp strokeWidth={2} />
                +12.5%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Trending up this month <TbTrendingUp size={16} />
            </div>
            <div className="text-muted-foreground">
              Visitors for the last 6 months
            </div>
          </CardFooter>
        </Card>

        <Card className="@container/card bg-[#f1f1f1]">
          <CardHeader>
            <CardDescription>Total Revenue</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              $1,250.00
            </CardTitle>
            <CardAction>
              <Badge variant="outline">
                <TbTrendingUp strokeWidth={2} />
                +12.5%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Trending up this month <TbTrendingUp size={16} />
            </div>
            <div className="text-muted-foreground">
              Visitors for the last 6 months
            </div>
          </CardFooter>
        </Card>
      </div>
      {/* ---------------------- Render Chart ------------------- */}
      <Card className="pt-0">
        <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
          <div className="grid flex-1 gap-1">
            <CardTitle>Revenue and Order Trend</CardTitle>
            <CardDescription>
              Showing revenue and order trend for the last 3 months
            </CardDescription>
          </div>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
          >
            <AreaChart data={filteredChartData}>
              <defs>
                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-desktop)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-desktop)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-mobile)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-mobile)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });
                }}
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      });
                    }}
                    indicator="dot"
                  />
                }
              />
              <Area
                dataKey="mobile"
                type="natural"
                fill="url(#fillMobile)"
                stroke="var(--color-mobile)"
                stackId="a"
              />
              <Area
                dataKey="desktop"
                type="natural"
                fill="url(#fillDesktop)"
                stroke="var(--color-desktop)"
                stackId="a"
              />
              <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
      {/* ---------------------- End Render Chart here ------------------- */}
      <h2 className="pt-4 font-medium">Recent Orders</h2>
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
                <TableHead>Order ID</TableHead>
                <TableHead>Payment ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Total Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.length > 0 ? (
                paginatedData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="font-medium capitalize">
                      {row.status}
                    </TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-200 text-gray-950">
                        Pending
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(row.amount)}
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

  // // 4. Initialize the TanStack engine with the feature registry
  // const table = useTable({
  //   features,
  //   data,
  //   columns,
  // });

  // return (
  //   <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
  //     <div className="grid auto-rows-min gap-4 md:grid-cols-4">
  //       <Card className="@container/card bg-[#f1f1f1]">
  //         <CardHeader>
  //           <CardDescription>Total Revenue</CardDescription>
  //           <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
  //             $1,250.00
  //           </CardTitle>
  //           <CardAction>
  //             <Badge variant="outline">
  //               <TbTrendingUp strokeWidth={2} />
  //               +12.5%
  //             </Badge>
  //           </CardAction>
  //         </CardHeader>
  //         <CardFooter className="flex-col items-start gap-1.5 text-sm">
  //           <div className="line-clamp-1 flex gap-2 font-medium">
  //             Trending up this month <TbTrendingUp size={16} />
  //           </div>
  //           <div className="text-muted-foreground">
  //             Visitors for the last 6 months
  //           </div>
  //         </CardFooter>
  //       </Card>

  //       <Card className="@container/card bg-[#f1f1f1]">
  //         <CardHeader>
  //           <CardDescription>Total Revenue</CardDescription>
  //           <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
  //             $1,250.00
  //           </CardTitle>
  //           <CardAction>
  //             <Badge variant="outline">
  //               <TbTrendingUp strokeWidth={2} />
  //               +12.5%
  //             </Badge>
  //           </CardAction>
  //         </CardHeader>
  //         <CardFooter className="flex-col items-start gap-1.5 text-sm">
  //           <div className="line-clamp-1 flex gap-2 font-medium">
  //             Trending up this month <TbTrendingUp size={16} />
  //           </div>
  //           <div className="text-muted-foreground">
  //             Visitors for the last 6 months
  //           </div>
  //         </CardFooter>
  //       </Card>

  //       <Card className="@container/card bg-[#f1f1f1]">
  //         <CardHeader>
  //           <CardDescription>Total Revenue</CardDescription>
  //           <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
  //             $1,250.00
  //           </CardTitle>
  //           <CardAction>
  //             <Badge variant="outline">
  //               <TbTrendingUp strokeWidth={2} />
  //               +12.5%
  //             </Badge>
  //           </CardAction>
  //         </CardHeader>
  //         <CardFooter className="flex-col items-start gap-1.5 text-sm">
  //           <div className="line-clamp-1 flex gap-2 font-medium">
  //             Trending up this month <TbTrendingUp size={16} />
  //           </div>
  //           <div className="text-muted-foreground">
  //             Visitors for the last 6 months
  //           </div>
  //         </CardFooter>
  //       </Card>

  //       <Card className="@container/card bg-[#f1f1f1]">
  //         <CardHeader>
  //           <CardDescription>Total Revenue</CardDescription>
  //           <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
  //             $1,250.00
  //           </CardTitle>
  //           <CardAction>
  //             <Badge variant="outline">
  //               <TbTrendingUp strokeWidth={2} />
  //               +12.5%
  //             </Badge>
  //           </CardAction>
  //         </CardHeader>
  //         <CardFooter className="flex-col items-start gap-1.5 text-sm">
  //           <div className="line-clamp-1 flex gap-2 font-medium">
  //             Trending up this month <TbTrendingUp size={16} />
  //           </div>
  //           <div className="text-muted-foreground">
  //             Visitors for the last 6 months
  //           </div>
  //         </CardFooter>
  //       </Card>
  //     </div>
  //     <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
  //       <Table>
  //         <TableHeader>
  //           {table.getHeaderGroups().map((headerGroup) => (
  //             <TableRow key={headerGroup.id}>
  //               {headerGroup.headers.map((header) => (
  //                 <TableHead key={header.id}>
  //                   {header.isPlaceholder ? null : (
  //                     <table.FlexRender header={header} />
  //                   )}
  //                 </TableHead>
  //               ))}
  //             </TableRow>
  //           ))}
  //         </TableHeader>
  //         <TableBody>
  //           {table.getRowModel().rows?.length ? (
  //             table.getRowModel().rows.map((row) => (
  //               <TableRow key={row.id}>
  //                 {row.getVisibleCells().map((cell) => (
  //                   <TableCell key={cell.id}>
  //                     <table.FlexRender cell={cell} />
  //                   </TableCell>
  //                 ))}
  //               </TableRow>
  //             ))
  //           ) : (
  //             <TableRow>
  //               <TableCell
  //                 colSpan={columns.length}
  //                 className="h-24 text-center"
  //               >
  //                 No results.
  //               </TableCell>
  //             </TableRow>
  //           )}
  //         </TableBody>
  //       </Table>
  //     </div>
  //     <div className="flex items-center justify-end space-x-2 py-4">
  //       <Button
  //         variant="outline"
  //         size="sm"
  //         // onClick={() => table.previousPage()}
  //         // disabled={!table.getCanPreviousPage()}
  //       >
  //         Previous
  //       </Button>
  //       <Button
  //         variant="outline"
  //         size="sm"
  //         // onClick={() => table.nextPage()}
  //         // disabled={!table.getCanNextPage()}
  //       >
  //         Next
  //       </Button>
  //     </div>
  //   </div>
  // );
}

export default Dashboard;
