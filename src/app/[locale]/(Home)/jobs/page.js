import Form from "./form"
import Svg from "@/components/Svg/svg"
import {useTranslations} from 'next-intl';




export default function page() {

  const t = useTranslations('Index');

  return (
    <div className="bg-gray-900 mt-28 ">
      <main id="content" role="main" className="sm:px-10 md:px-20 lg:px-40">
        <div className="text-center py-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-white sm:text-4xl">
            {t("job.label1")}
          </h2>
          <h2 className="mt-1 sm:mt-3 text-4xl font-bold text-white sm:text-6xl">
            <span className="text-5xl bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-400 text-transparent">ZaHa Script</span>
          </h2>

          <Form/>

        </div>
      </main>
      <Svg/>
    </div>
  )

}
