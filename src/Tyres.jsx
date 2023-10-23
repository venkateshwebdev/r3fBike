const Tyres = () => {
    return (
        <main className="absolute min-h-[100vh] w-full bg-gray-200 top-0 p-16 overflow-hidden flex flex-col justify-center">
        <div className="text-3xl flex flex-col gap-10">
          <h1 className="font-extrabold">CORTEX</h1>
          <h1 className="text-[150px] text-transparent font-bold" style={{WebkitTextStroke:"2px black"}}>BICYCLES</h1>
        </div>  
        <button className="self-start justify-start mt-32 px-5 py-2 border-2 border-black">order now</button>
      </main>
    );
}
 
export default Tyres;