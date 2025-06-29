type Props = {
  name?: string;
  value?: number;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const items = [1, 2, 3, 4, 5];

const Rating = ({ name, value, onChange, required }: Props) => {
  return (
    <div className="rating">
      {items.map((item) => (
        <label key={item}>
          <input
            type="radio"
            value={item}
            name={name}
            required={required}
            defaultChecked={value === item}
            onChange={onChange}
          />
          <span>{item} stars</span>
        </label>
      ))}
    </div>
  );
};

export default Rating;
