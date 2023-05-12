import miVideo from "../../resources/video.mp4";

export const BodyMovie = () => {
  return (
    <>
      <div className="container mx-auto my-4">
        <div className="flex flex-row">
          <div className="w-2/6 p-4">
            <img
              src="https://static.esplay.one/movie/cover/original/nODj4huoOcHwCQnfhZFCqUYcInU.webp"
              alt="Imagen del producto"
              className="max-h-96 w-auto"
            />
          </div>
          <div className="w-3/5 p-4">
            <div className="">
              <h2 className="text-white font-bold">M3GAN</h2>
              <p className="text-white">Título Original: M3GAN</p>
              <p className="text-white">Año: 2023</p>
              <p className="text-white">Géneros: Ciencia Ficción, Terror</p>
              <p className="text-white">
                Sinópsis: Un ingeniero en robótica de una empresa de juguetes
                construye una muñeca realista que comienza a cobrar vida propia.
                Cuando Gemma de repente se convierte en la cuidadora de su
                sobrina huérfana de 8 años, Cady, Gemma no está segura ni
                preparada para ser madre. Bajo una intensa presión en el
                trabajo, Gemma decide emparejar su prototipo M3GAN con Cady en
                un intento de resolver ambos problemas, una decisión que tendrá
                consecuencias inimaginables.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <video className="h-450" controls>
          <source src={miVideo} type="video/mp4" />
          Tu navegador no soporta el elemento video.
        </video>
      </div>
    </>
  );
};
