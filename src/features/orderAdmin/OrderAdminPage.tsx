import type { PropsOfExtend } from "@/types/PropsOf";

import Image from "next/image";

import { tx, cf } from "@/libs";
import { formatDate } from "@/libs/date";
import { MansCard, MansButton } from "@/components";
import { MansChip } from "@/components/Chip/Chip";
import { MansDialog } from "@/components/Dialog/Dialog";
import { MansEditable } from "@/components/Editable/Editable";

import { useOrderDetails, useUserShippingInfo } from "../order/query";

const OrderDetailContainer = ({
  className,
  ...props
}: PropsOfExtend<"div">) => {
  return (
    <div
      className={tx("min-h-20 border-b border-black/10 py-2", className)}
      {...props}
    />
  );
};

export const OrderAdminPage = () => {
  const { id, items, total, createdAt, modifiedAt, tags } = useOrderDetails();
  const { name, address, city, country } = useUserShippingInfo();

  return (
    <main className="container mx-auto flex min-h-screen min-w-96 flex-col items-center justify-center p-4">
      <div className="mb-4 flex w-full justify-between">
        <h1 className="text-base">
          <span className="font-bold">Order&nbsp;</span>
          <span>{id}</span>
        </h1>
        <div className="text-right">
          <p>Created on {formatDate(createdAt, "MMM dd, yyyy")}</p>
          <p>Last modified on {formatDate(modifiedAt, "MMM dd, yyyy")}</p>
        </div>
      </div>
      <MansCard className="container">
        <div>
          <div className="grid grid-cols-4 font-semibold uppercase">
            <span className="col-start-2">Product</span>
            <span className="text-center">Quantity</span>
            <span className="text-center">Price</span>
          </div>
          <ul>
            {items.map(({ image, id, title, quantity, itemTotal }) => (
              <li key={id}>
                <OrderDetailContainer className="grid grid-cols-4 items-center">
                  <span className="col-span-1">
                    <Image src={image} alt={title} width={40} height={40} />
                  </span>
                  <MansEditable value={title} className="self-center" />
                  <MansEditable
                    value={quantity}
                    className="self-center text-center"
                  />
                  <MansEditable
                    value={cf(itemTotal)}
                    className="justify-center text-center"
                  />
                </OrderDetailContainer>
              </li>
            ))}
          </ul>
          <OrderDetailContainer className="col-span-4 grid grid-cols-4 items-center">
            <span className="font-semibold">Total:</span>
            <MansEditable
              value={cf(total)}
              className="col-start-4 justify-center text-center"
            />
          </OrderDetailContainer>
        </div>

        <OrderDetailContainer className="py-6">
          <p className="font-bold uppercase">SHIPPING ADDRESS</p>
          <MansEditable value={name} />
          <MansEditable value={address} />
          <MansEditable value={city} />
          <MansEditable value={country} />

          {tags && tags.length > 0 && (
            <ul className="flex flex-wrap gap-2 pt-4">
              {tags.map((tag) => (
                <MansDialog
                  key={tag}
                  triggerFn={({ open }) => (
                    <MansChip onClick={open}>{tag}</MansChip>
                  )}
                >
                  {tag}
                </MansDialog>
              ))}
            </ul>
          )}
        </OrderDetailContainer>

        <div className="flex flex-wrap gap-3 pt-6">
          <MansDialog
            triggerFn={({ toggle }) => (
              <MansButton type="button" onClick={toggle}>
                Cancel
              </MansButton>
            )}
          >
            <h1 className="text-base font-semibold">
              <MansEditable value="Are you sure?" />
            </h1>
            <div className="flex gap-3 place-self-end">
              <MansButton type="reset">Maybe not</MansButton>
              <MansButton type="submit">Cancel my order</MansButton>
            </div>
          </MansDialog>
          <MansDialog
            triggerFn={({ toggle }) => (
              <MansButton type="button" onClick={toggle}>
                Refund
              </MansButton>
            )}
          >
            <MansEditable value="This could take 3-5 business days." />
          </MansDialog>
          <MansDialog
            triggerFn={({ toggle }) => (
              <MansButton type="button" onClick={toggle}>
                Resend Confirmation
              </MansButton>
            )}
          >
            <MansEditable value="We will send you another confirmation email." />
          </MansDialog>
          <MansDialog
            triggerFn={({ toggle }) => (
              <MansButton type="button" onClick={toggle}>
                Resend Tracking
              </MansButton>
            )}
          >
            <MansEditable
              value="Check your inbox and spam folder for the tracking link of our
              courier."
            />
          </MansDialog>
        </div>
      </MansCard>
    </main>
  );
};
