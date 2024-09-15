import { ImageUpload } from "./ImageUpd";

function Up() {
    return (
        <div className="h-screen bg-gradient-to-r from-green-200 to-white-200 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-12">Crop Disease Predictor</h1>
            <ImageUpload />
        </div>
    );
}

export default Up;