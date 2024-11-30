import { describe, it, expect } from 'vitest';
import { render } from "@solidjs/testing-library";
import NotFound from './Not-Found';

describe("<NotFound />", () => {
  it("should exist", async () => {
      const { getByRole } = render(() => <NotFound />);
      const notFound = getByRole('contentinfo');
      expect(notFound).toBeInTheDocument();
    });
});


