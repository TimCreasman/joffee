import { describe, it, expect } from 'vitest';
import { render } from "@solidjs/testing-library";
import NotFound from "./NotFound"

describe("<NotFound />", () => {
  it("should exist", async () => {
      const { getByText } = render(() => <NotFound />);
      const notFoundPage = getByText('Page not found');
      expect(notFoundPage).toBeInTheDocument();
    });
});

