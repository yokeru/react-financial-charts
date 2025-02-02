import { rebind } from "../utils/index.js";
import { kagi } from "../calculator/index.js";
import baseIndicator from "./baseIndicator.js";

const ALGORITHM_TYPE = "Kagi";

export default function () {
    const base = baseIndicator().type(ALGORITHM_TYPE);

    const underlyingAlgorithm = kagi();

    const indicator = underlyingAlgorithm;

    rebind(indicator, base, "id", "stroke", "fill", "echo", "type");
    rebind(indicator, underlyingAlgorithm, "dateAccessor", "dateMutator", "options");

    return indicator;
}
