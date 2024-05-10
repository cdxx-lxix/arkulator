/**
 * Colors:
 * orange - main story episodes
 * gray - reruns
 * teal - cc
 * yellow - limited
 * red - limited collab
 * indigo - normal events
 * blue - story events (shorties)
 */
/**
 * Prepends:
 * LIMITED |
 * COLLAB |
 * Episode ## |
 * Rerun |
 * CC## |
 * Event |
 * Story event |
 */
const events = [
  {
    dates: { start: new Date(2024, 3, 16), end: new Date(2024, 3, 30) },
    popover: {
      label: "Episode 13 | The Whirlpool That Is Passion",
    },
    highlight: {
        color: 'orange',
        fillMode: 'outline',
      },
  },
  {
    dates: { start: new Date(2024, 3, 30), end: new Date(2024, 4, 19) },
    popover: {
      label: "LIMITED | Zwillingstürme im Herbst",
    },
    highlight: {
        color: 'yellow',
        fillMode: 'outline',
      },
  },
  {
    dates: { start: new Date(2024, 4, 23), end: new Date(2024, 5, 1) },
    popover: {
      label: "Rerun | Il Siracusano",
    },
    highlight: {
        color: 'gray',
        fillMode: 'outline',
      },
  },
  {
    dates: { start: new Date(2024, 5, 5), end: new Date(2024, 5, 19) },
    popover: {
      label: "CC#1 | Pyrolysis",
    },
    highlight: {
        color: 'teal',
        fillMode: 'outline',
      },
  },
];

export default events;
