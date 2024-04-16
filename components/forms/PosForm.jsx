"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PosSchema } from "@/lib/validations";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PosForm = () => {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(PosSchema),
    defaultValues: {
      username: "",
      numbers: [],
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  // Define Add to cart

  const addNumberToCart = (e, field) => {
    if (field.name === "number") {
      e.preventDefault();

      const numberInput = e.target;
      const numberValue = numberInput.value;

      alert(numberValue);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-10"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Serie
              </FormLabel>
              <FormControl className="mt-3.5">
                {/* <Input
                  className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                  {...field}
                /> */}
                <Select>
                  <SelectTrigger className="background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="paragraph-regular background-light900_dark300 text-dark300_light700">
                    <SelectItem value="A">A</SelectItem>
                    <SelectItem value="B">B</SelectItem>
                    <SelectItem value="C">C</SelectItem>
                    <SelectItem value="D">D</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Selecciona una serie para cada número.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Número.
              </FormLabel>
              <FormControl className="mt-3.5">
                <div className="flex">
                  <Input
                    type="number"
                    className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                    {...field}
                  />
                  <Button onClick={(e) => addNumberToCart(e, field)}>
                    Agregar
                  </Button>
                </div>
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Introduce el número que deseas vender.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default PosForm;
