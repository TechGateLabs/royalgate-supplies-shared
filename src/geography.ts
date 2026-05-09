/**
 * Currently-served Nigerian states and their LGAs. Single source of truth
 * for state/LGA pickers across the buyer storefronts, agent app, and ops
 * dashboard. Adding a new state here propagates to every form.
 *
 * Lagos LGA list mirrors the official 20. Ogun list is the subset within
 * RoyalGate's wholesale catchment (closest to the Lagos hub); the four
 * far-northern Ogun LGAs (Imeko-Afon, Yewa North/South, Ipokia,
 * Ogun Waterside) are deliberately excluded until a depot is added.
 */
export const LGAS_BY_STATE = {
  Lagos: [
    'Agege',
    'Ajeromi-Ifelodun',
    'Alimosho',
    'Amuwo-Odofin',
    'Apapa',
    'Badagry',
    'Epe',
    'Eti-Osa',
    'Ibeju-Lekki',
    'Ifako-Ijaiye',
    'Ikeja',
    'Ikorodu',
    'Kosofe',
    'Lagos Island',
    'Lagos Mainland',
    'Mushin',
    'Ojo',
    'Oshodi-Isolo',
    'Somolu',
    'Surulere',
  ],
  Ogun: [
    'Abeokuta North',
    'Abeokuta South',
    'Ado-Odo/Ota',
    'Ewekoro',
    'Ifo',
    'Ijebu Ode',
    'Ikenne',
    'Obafemi Owode',
    'Odeda',
    'Sagamu',
  ],
} as const satisfies Record<string, readonly string[]>;

export type SupportedState = keyof typeof LGAS_BY_STATE;

export const SUPPORTED_STATES: readonly SupportedState[] = Object.keys(
  LGAS_BY_STATE,
) as SupportedState[];

export const DEFAULT_STATE: SupportedState = 'Lagos';

export function lgasFor(state: string): readonly string[] {
  return state in LGAS_BY_STATE ? LGAS_BY_STATE[state as SupportedState] : [];
}

export function isSupportedState(state: string): state is SupportedState {
  return state in LGAS_BY_STATE;
}
