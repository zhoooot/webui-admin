import ThemeOption from "./components/theme_option";

const Preference = (): JSX.Element => {
  return (
    <div className="bg-white p-8 w-full rounded-xl">
      <text className="text-3xl text-black">Theme</text>
      <div className="flex flex-row [&>*]:m-2">
        <ThemeOption type="spring"></ThemeOption>

        <ThemeOption type="summer"></ThemeOption>

        <ThemeOption type="fall"></ThemeOption>

        <ThemeOption type="winter"></ThemeOption>
      </div>
      <div className="mt-4 mb-2">
        <text className="text-black text-3xl">Background Music</text>
      </div>
      <div>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Is It Over Now?
          </option>
          <option>Now That We Don't Talk</option>
          <option>Say Don't Go</option>
        </select>
      </div>
      <div className="flex flex-row-reverse">
        <button className="btn btn-primary text-white">Save</button>
      </div>
    </div>
  );
};

export default Preference;
