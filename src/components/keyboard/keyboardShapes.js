export const keyboardShapes = {
  C: ["C1", "D1", "E1", "F1"],
  Db: ["Db1", "Eb1", "F1", "Gb1"],
  D: ["D1", "E1", "Gb1", "G1"],
  Eb: ["Eb1", "F1", "G1", "Ab1"],
  E: ["E1", "Gb1", "Ab1", "A1"],
  F: ["F1", "G1", "A1", "Bb1"],
  Gb: ["Gb1", "Ab1", "Bb1", "B1"],
  G: ["G1", "A1", "B1", "C2"],
  Ab: ["Ab1", "Bb1", "C2", "Db2"],
  A: ["A1", "B1", "Db2", "D2"],
  Bb: ["Bb1", "C2", "D2", "Eb2"],
  B: ["B1", "Db2", "Eb2", "E2"]
};

export const fullScales = {
  C: ["C1", "D1", "E1", "F1", "G1", "A1", "B1", "C2"],
  Db: ["Db1", "Eb1", "F1", "Gb1", "Ab1", "Bb1", "C2", "Db2"],
  D: ["D1", "E1", "Gb1", "G1", "A1", "B1", "Db2", "D2"],
  Eb: ["Eb1", "F1", "G1", "Ab1", "Bb1", "C2", "D2", "Eb2"],
  E: ["E1", "Gb1", "Ab1", "A1", "B1", "Db2", "Eb2", "E2"],
  F: ["F1", "G1", "A1", "Bb1", "C2", "D2", "E2", "F2"],
  Gb: ["Gb1", "Ab1", "Bb1", "B1", "Db2", "Eb2", "F2", "Gb2"],
  G: ["G1", "A1", "B1", "C2", "D2", "E2", "Gb2", "G2"],
  Ab: ["Ab1", "Bb1", "C2", "Db2", "Eb2", "F2", "G2", "Ab2"],
  A: ["A1", "B1", "Db2", "D2", "E2", "Gb2", "Ab2", "A2"],
  Bb: ["Bb1", "C2", "D2", "Eb2", "F2", "G2", "A2", "Bb2"],
  B: ["B1", "Db2", "Eb2", "E2", "Gb2", "Ab2", "Bb2", "B2"]
};

export const edgeKeys = {
  C: { bottom: "C1", top: "C2" },
  Db: { bottom: "D1", top: "D2" },
  D: { bottom: "D1", top: "D2" },
  Eb: { bottom: "E1", top: "E2" },
  E: { bottom: "E1", top: "E2" },
  F: { bottom: "F1", top: "F2" },
  Gb: { bottom: "G1", top: "G2" },
  G: { bottom: "G1", top: "G2" },
  Ab: { bottom: "A1", top: "A2" },
  A: { bottom: "A1", top: "A2" },
  Bb: { bottom: "B1", top: "B2" },
  B: { bottom: "B1", top: "B2" }
};
export const scaleShapes = {
  C: { bottom: "line", top: "line" },
  Db: { bottom: "truck", top: "truck" },
  D: { bottom: "truck", top: "truck" },
  Eb: { bottom: "car", top: "car" },
  E: { bottom: "car", top: "car" },
  F: { bottom: "wagon", top: "line" },
  Gb: { bottom: "wagon", top: "truck" },
  G: { bottom: "line", top: "truck" },
  Ab: { bottom: "truck", top: "car" },
  A: { bottom: "truck", top: "car" },
  Bb: { bottom: "car", top: "wagon" },
  B: { bottom: "car", top: "wagon" }
};
