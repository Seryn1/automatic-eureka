export default function Task2Page() {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      
      <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto">

        <div className="col-span-2 bg-blue-200 p-6 rounded-xl">
          <p className="text-sm">Design</p>
          <h1 className="text-4xl font-bold">Adobe Photoshop</h1>
          <p className="text-sm text-black-600">in 3 days</p>
        </div>

        <div className="col-span-2 bg-green-200 p-6 rounded-xl">
          <p className="text-sm">AI</p>
          <h1 className="text-lg font-bold mt-4">
            DALL·E 2, Midjourney, Stable Diffusion
          </h1>
          <p className="text-sm text-black-600">in 5 days</p>
        </div>

        <div className="bg-purple-200 p-6 rounded-xl">
          <h1 className="font-bold">Figma</h1>
          <p className="text-sm text-black-600">8 hours ago</p>
        </div>

        <div className="bg-orange-200 p-6 rounded-xl">
          <h1 className="font-bold">Python</h1>
          <p className="text-sm text-black-600">2 days ago</p>
        </div>

        <div className="bg-pink-200 p-6 rounded-xl">
          <h1 className="font-bold">Sketch</h1>
          <p className="text-sm text-black-600">4 days ago</p>
        </div>

      </div>

    </div>
  );
}