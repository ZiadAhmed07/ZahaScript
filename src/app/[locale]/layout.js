import {notFound} from 'next/navigation';
 
// Can be imported from a shared config
const locales = ['ar', 'en'];
 
export default function LocaleLayout({children, params: {locale}}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();
 
  let dir = "rtl" 

  if(locale == "en"){dir = "ltr"}
  if(locale == "ar"){dir = "rtl"}

  return (
    <div lang={locale} dir={dir} >
      <div>{children}</div>
    </div>
  );
}