import "./Accordion.scss";

export default function Accordion() {
  return (
    <div>
      <h3>Accordion</h3>

      <div>
        <div className="accordion">
          <div className="accordion-item">Item number 1</div>
          <div className="accordion-panel">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              sequi vitae nostrum id dolores cum quisquam minima ipsum ipsam,
              quod in itaque suscipit temporibus veniam consequatur. Temporibus
              perferendis a id!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
