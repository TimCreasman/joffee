import { describe, it, expect } from 'vitest';
import { render } from "@solidjs/testing-library";
import Footer from './Footer';

describe("<Footer />", () => {
  it("should exist", async () => {
      const { getByRole } = render(() => <Footer />);
      const footer = getByRole('contentinfo');
      expect(footer).toBeInTheDocument();
    });
});

