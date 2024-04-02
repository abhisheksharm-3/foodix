import { FormControl, FormItem } from "@/components/ui/form";
import { Checkbox } from "@nextui-org/react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

type Props = {
  cuisine: string;
  field: ControllerRenderProps<FieldValues, "cuisines">;
};

const CuisineCheckbox = ({ cuisine, field }: Props) => {
  return (
    <FormItem className="flex flex-row items-center space-x-1 space-y-0 mt-2">
      <FormControl>
        <Checkbox
          color="success"
          checked={field.value.includes(cuisine)}
          onValueChange={(checked) => {
            if (checked) {
              field.onChange([...field.value, cuisine]);
            } else {
              field.onChange(
                field.value.filter((value: string) => value !== cuisine)
              );
            }
          }}
        >
          {cuisine}
        </Checkbox>
      </FormControl>
    </FormItem>
  );
};

export default CuisineCheckbox;
