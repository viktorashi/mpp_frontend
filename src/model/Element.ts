export default interface Element {
  number: number;
  name: string;
  appearance: string;
  discovered_by: string;
  named_by: string;
  phase: string;
  bohr_model_image: string;
  summary: string;
  category: string;
  image: {
    url: string;
  };
}
