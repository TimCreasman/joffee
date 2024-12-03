import { describe, it, expect } from 'vitest';
import { render } from "@solidjs/testing-library";
import Map from './Map';

describe("<Map />", () => {
  it("should exist", async () => {
      const { getByRole } = render(() => <Map />);
      const map = getByRole('generic');
      expect(map).toBeInTheDocument();
  });

  it("should show error message on map error", async () => {
    vi.mock()
  });
});

