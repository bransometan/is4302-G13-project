import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { RentalPropertyStruct } from "@/types/contracts";
import { CircleEllipsis } from "lucide-react";
import React from "react";

const RentalPropertyActionsDropdown = ({
  rentalProperty,
}: {
  rentalProperty: RentalPropertyStruct;
}) => {
  return (
    <Popover>
      <PopoverTrigger className="absolute right-1 top-1">
        <CircleEllipsis color="gray" />
      </PopoverTrigger>
      <PopoverContent className="text-sm absolute right-0 top-0 w-[100px]">
        <div>
          <ul className="space-y-1"></ul>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default function RentalPropertyCard({
  rentalProperty,
}: {
  rentalProperty: RentalPropertyStruct;
}) {
  return (
    <Card>
      <CardHeader className="font-bold relative">
        <RentalPropertyActionsDropdown rentalProperty={rentalProperty} />
        <CardTitle>{rentalProperty.location}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p> {rentalProperty.description}</p>
        <hr />
        <ul className="text-sm text-muted-foreground">
          <li>
            <p>Lease duration (months): {rentalProperty.leaseDuration}</p>
          </li>
          <li>
            <p>Number of tenants: {rentalProperty.numOfTenants}</p>
          </li>
          <li>
            <p>Postal code: {rentalProperty.postalCode}</p>
          </li>
          <li>
            <p>Property type: {rentalProperty.propertyType}</p>
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <p>
          <b>{rentalProperty.rentalPrice}</b> Lease Token/month
        </p>
      </CardFooter>
    </Card>
  );
}