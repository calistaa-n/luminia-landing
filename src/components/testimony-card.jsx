export default function Testimony ({title, description, image, name}) {
   return(
    <div className="bg-white border border-gray-200 p-6 rounded-xl max-w-sm min-h-[348px] flex flex-col justify-between">
        <p className="text-goldYellow text-xl font-bold">{title}</p>
        <p className="italic text-justify">"{description}"</p>
        <div className="flex items-center space-x-3">
            <img src={image} alt="{name}" className="h-12 w-12 rounded-full object-cover" />
            <h4 className="font-bold">{name}</h4>
        </div>
    </div>
   );
}