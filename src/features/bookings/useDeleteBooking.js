import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onError: (err) => toast.error(err.message),
    onSuccess: () => {
      toast.success("Booking successfully deleted!");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
  });

  return { isDeleting, deleteBooking };
}
