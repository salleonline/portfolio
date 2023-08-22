import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="GHANA" invert={invert}>
          CLOSE TO THE STATION
          <br />
          ABURI
        </Office>
      </li>
      <li>
        <Office name="GHANA" invert={invert}>
          CLOSE TO BUNKUM SENIOR
          <br />
          AKRONPONG
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
