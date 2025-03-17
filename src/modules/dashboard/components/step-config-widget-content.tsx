"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useDispatch } from "react-redux";
import {
  addNewWidget,
  resetActiveMetric,
  toogleModal,
  updateActiveMetric,
} from "@/modules/dashboard/store/dashboard-slice";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string().min(2).max(100),
});

export default function StepConfigWidgetType() {
  const dispatch = useDispatch();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { title, description } = values;
    dispatch(updateActiveMetric({ title, description }));
    dispatch(addNewWidget());
    dispatch(toogleModal());
    dispatch(resetActiveMetric());
  }
  return (
    <Card className="shadow-none">
      <CardContent>
        <Form {...form}>
          <form
            id="step-config-widget-content"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Title<span className="text-rose-600 -ml-1">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Description<span className="text-rose-600 -ml-1">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="shadcn" rows={10} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
