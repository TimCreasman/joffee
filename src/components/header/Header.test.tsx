import { describe, it, expect } from 'vitest';
import { render } from "@solidjs/testing-library";
import Header from './Header';

describe("<Header />", () => {
  it("should exist", async () => {
      const { getByRole } = render(() => <Header />);
      const header = getByRole('banner');
      expect(header).toBeInTheDocument();
    });
});

