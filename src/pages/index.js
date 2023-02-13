import styles from '@/styles/Home.module.css'
import Uppy from '@uppy/core'
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import GoogleDrive from '@uppy/google-drive'
import Dashboard from '@uppy/dashboard'
import Url from '@uppy/url'
import Webcam from '@uppy/webcam'
import '@uppy/webcam/dist/style.css'

const SERVER_BASE_URL = "http://localhost:3020";


const metaFields = [
  {
    id: 'name', name: 'File name', placeholder: 'Enter the file name'
  },
  {
    id: 'tags', name: 'Tags', placeholder: 'Comma seperated tags e.g. t-shirt,summer'
  }
];

/* const uppy = new Uppy({ debug: true, autoProceed: false })
  .use(Dashboard, {
    inline: true,
    trigger: '#uppyDashboard',
    metaFields: metaFields,
    proudlyDisplayPoweredByUppy: false,
  })
  .use(GoogleDrive, { target: Dashboard, companionUrl: SERVER_BASE_URL }) // don't add trailing slash
  .use(Url, { target: Dashboard, companionUrl: SERVER_BASE_URL })


uppy.on('success', (fileCount) => {
  console.log(`${fileCount} files uploaded`)
}) */

export default function Home() {
  return (
    <div className={styles.center} id="uppyDashboard">
    Hello
    </div>
  )
}
