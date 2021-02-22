import React from "react";
import { render, screen, waitFor } from "@testing-library/react"
import App from "./App";

test('component renders without errors', () => {
    render(<App />);
})