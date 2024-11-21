
const TwoColumn = ({ title, data, isReverse = false }: { title: string, data: string, isReverse?: boolean }) => {
    const textArray = ["Next.js Boilerplate", "for Your Business"];
    const imageComponent = () => {
        return (
            <div className="relative mt-8 md:mt-0 flex justify-center md:w-1/2">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-4/5 md:h-screen max-h-80 max-w-80">
                    <img
                        src="/banners/banner3.jpg"
                        alt="Foreground Image"
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>
                <div className="absolute top-20 right-16 sm:top-10 sm:left-20 md:top-10 md:left-10 w-48 h-48 sm:w-56 sm:h-56 md:w-4/5 md:h-screen max-h-64 max-w-64">
                    <div className="absolute bottom-4 left-4 w-full h-full backdrop-blur-sm bg-white/30 rounded-md" />
                    <img
                        src="/banners/banner1.jpg"
                        alt="Overlay Image"
                        className="absolute inset-0 w-full h-full object-cover rounded-md z-40"
                    />
                </div>
            </div>
        )
    }
    const textComponent = () => {
        return (
            <div className="xs:w-3/4 max-w-lg xs:pt-10 space-y-4 flex flex-col justify-center text-center md:text-left mx-auto md:mx-0 md:w-1/2">
                <h1 className=" mb-8 font-heading text-2xl font-bold text-dark dark:text-white sm:text-[40px] sm:leading-[50px]">{title}</h1>
                <p className="mb-6 text-base text-dark-text">{data}</p>
            </div>
        )
    }
    return (
        <section className="flex flex-col md:flex-row justify-between bg-gradient-to-r from-gray-900 to-[#040406] p-6 md:p-8 py-20  text-white">
            <div className="flex flex-col md:flex-row justify-between w-full max-w-5xl mx-auto">
                {isReverse ?
                    <>
                        {imageComponent()}
                        {textComponent()}

                    </>
                    : <>
                        {textComponent()}
                        {imageComponent()}
                    </>
                }
            </div>
        </section>
    );
};

export default TwoColumn;
