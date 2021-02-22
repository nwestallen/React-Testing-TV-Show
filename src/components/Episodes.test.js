import React from "react";
import { render, screen, waitFor } from "@testing-library/react"
import Episodes from "./Episodes";

test('component renders without errors', () => {
    render(<Episodes />);
})