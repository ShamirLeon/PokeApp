const InfoItem = ({ text, value }) => {
  const colorRanges = [
    { color: "Red", min: 0, max: 64 },
    { color: "Orange", min: 65, max: 129 },
    { color: "Yellow", min: 130, max: 194 },
    { color: "Green", min: 195, max: 255 },
  ];

  let color = "DefaultColor";

  for (const range of colorRanges) {
    if (value >= range.min && value < range.max) {
      color = range.color;
      break;
    }
  }

  return (
    <div className="Info">
      <span className="Info__Text">{text}</span>
      <span className="Info__Value">{value}</span>
      <div className="Info__Bar">
        <div
          className={`Info__Progress ${color}`}
          style={{ width: `${value}px` }}
        ></div>
      </div>
    </div>
  );
};

export default InfoItem;
