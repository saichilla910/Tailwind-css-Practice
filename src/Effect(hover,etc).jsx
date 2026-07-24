const Effects = () => {
  return (
    <div className="space-y-4 p-6">

      <button className="bg-blue-500 text-white px-4 py-2 hover:bg-transparent hover:text-blue-500 border">
        Hover
      </button>

      <button className="bg-blue-500 text-white px-4 py-2 active:bg-gray-500">
        Active
      </button>

      <a
        href="https://example.com"
        className="text-blue-500 visited:text-purple-600"
      >
        Visited Link
      </a>

      <button className="invisible">
        Invisible
      </button>

      <button
        disabled
        className="bg-blue-500 text-white px-4 py-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Disabled
      </button>

      <input
        type="email"
        required
        placeholder="Enter email"
        className="border p-2 invalid:border-red-500"
      />

    </div>
  );
};

export default Effects;