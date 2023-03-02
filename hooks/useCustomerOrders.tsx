import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../graphql/queries";
import { useEffect, useState } from "react";

function useCustomerOrders(userId: string) {
  const { loading, error, data } = useQuery(GET_ORDERS);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!data) return;

    const orders: Order[] = data.getOrders.map(({ value }: OrderResponse) => ({
      carrier: value.carrier,
      createdAt: value.createdAt,
      trackingId: value.trackingId,
      shippingCost: value.shippingCost,
      Address: value.Address,
      City: value.City,
      Lng: value.Lng,
      Lat: value.Lat,
      trackingItems: value.trackingItems,
    }));

    const customerOrders = orders.filter(
      (order) => order.trackingItems.customer_id === userId
    );
  }, [data]);

  return <div>useCustomerOrders</div>;
}

export default useCustomerOrders;