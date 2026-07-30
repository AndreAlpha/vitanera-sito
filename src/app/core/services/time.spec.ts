import { formatDuration, formatSince } from './content.service';

const BASE = Date.parse('2026-07-30T12:00:00+02:00');
const iso = (offsetMs: number) => new Date(BASE - offsetMs).toISOString();

describe('tempo trascorso', () => {
  it('sotto il minuto dice "adesso"', () => {
    expect(formatSince(iso(20_000), BASE)).toBe('adesso');
  });

  it('entro l’ora usa i minuti', () => {
    expect(formatSince(iso(18 * 60_000), BASE)).toBe('18m fa');
    expect(formatSince(iso(59 * 60_000), BASE)).toBe('59m fa');
  });

  it('oltre l’ora usa ore ed eventuali minuti', () => {
    expect(formatSince(iso(2 * 3_600_000), BASE)).toBe('2h fa');
    expect(formatSince(iso(2 * 3_600_000 + 20 * 60_000), BASE)).toBe('2h 20m fa');
  });

  it('oltre la soglia mostra data e ora complete', () => {
    const label = formatSince(iso(20 * 3_600_000), BASE, 12);
    expect(label).toContain('luglio');
    expect(label).toContain('·');
  });

  it('una data futura non produce un tempo negativo', () => {
    const label = formatSince(iso(-60_000), BASE);
    expect(label).toContain('luglio');
  });
});

describe('durata residua', () => {
  it('formatta minuti e ore', () => {
    expect(formatDuration(42 * 60_000)).toBe('42m');
    expect(formatDuration(65 * 60_000)).toBe('1h 05m');
    expect(formatDuration(-5_000)).toBe('0m');
  });
});
