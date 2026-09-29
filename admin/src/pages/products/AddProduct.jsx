import React from "react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function AddProduct() {
  return (
    <div>
      <div className="flex flex-col p-4 pt-0">
        <h2 className="text-[18px] font-medium">Add Products</h2>
        {/* <FieldSet>
          <FieldGroup>
            <FieldLegend className="text-[25px]">Add Product</FieldLegend>
            <FieldDescription>
              All transactions are secure and encrypted
            </FieldDescription>
          </FieldGroup>
        </FieldSet> */}
      </div>
      <form>
        <div className="flex flex-row gap-4 p-4 pt-0">
          <div className="w-[50%] border rounded-md p-6">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  Product Title
                </FieldLabel>
                <Input required />
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                  Description
                </FieldLabel>
                <Textarea required className="h-40" />
              </Field>

              <FieldSeparator />

              <div className="w-1/2 flex flex-row gap-2">
                <Field>
                  <FieldLabel>Regular Price</FieldLabel>
                  <Input type="text" required />
                </Field>
                <Field>
                  <FieldLabel>Sale Price</FieldLabel>
                  <Input type="text" required />
                </Field>
              </div>
              <FieldSeparator />
              <div className="flex flex-row gap-2">
                <div className="w-1/3">
                  <Field>
                    <FieldLabel>Brand</FieldLabel>
                    <Input type="text" required />
                  </Field>
                </div>
                <div className="w-1/3">
                  <Field>
                    <FieldLabel>Category</FieldLabel>
                    <Select>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {/* {years.map((item) => ( */}
                          <SelectItem key={"t-shirt"} value={"T-Shirt"}>
                            T-Shirt
                          </SelectItem>
                          <SelectItem key={"Pant"} value={"Pant"}>
                            Pant
                          </SelectItem>
                          <SelectItem key={"hat"} value={"Hat"}>
                            Hat
                          </SelectItem>
                          {/* ))} */}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                </div>
                <div className="w-1/3">
                  <Field>
                    <FieldLabel>Sub-Category</FieldLabel>
                    <Select>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {/* {years.map((item) => ( */}
                          <SelectItem key={"t-shirt"} value={"T-Shirt"}>
                            T-Shirt
                          </SelectItem>
                          <SelectItem key={"Pant"} value={"Pant"}>
                            Pant
                          </SelectItem>
                          <SelectItem key={"hat"} value={"Hat"}>
                            Hat
                          </SelectItem>
                          {/* ))} */}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                </div>
              </div>

              <FieldSeparator />
              <div className="flex flex-row gap-2">
                <div className="w-1/3">
                  <Field>
                    <FieldLabel>Quantity</FieldLabel>
                    <Input type="text" required />
                  </Field>
                </div>
                <div className="w-1/3">
                  <Field>
                    <FieldLabel>Size</FieldLabel>
                    <Input type="text" required />
                  </Field>
                </div>
                <div className="w-1/3">
                  <Field>
                    <FieldLabel>Weight</FieldLabel>
                    <Input type="text" required />
                  </Field>
                </div>
              </div>
            </FieldGroup>

            <FieldGroup className="py-3">
              <FieldSet>
                <Field orientation="horizontal">
                  <Button type="submit">Submit</Button>
                </Field>
              </FieldSet>
            </FieldGroup>
          </div>

          <div className="w-[50%] border rounded-md p-6">Image Gallery</div>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
