import { colors } from "../data";

export function Stars({ rating, size = 11 }) {
  return (
    <span style={{ fontSize: size, color: colors.accent }}>
      {"★".repeat(Math.round(rating))}
      {"☆".repeat(5 - Math.round(rating))}
      <span style={{ color: colors.text3, marginLeft: 3, fontSize: size }}>
        {rating}
      </span>
    </span>
  );
}
