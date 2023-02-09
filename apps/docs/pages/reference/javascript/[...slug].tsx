import clientLibsCommonSections from '~/../../spec/common-client-libs-sections.json'
import typeSpec from '~/../../spec/enrichments/tsdoc_v2/combined.json'
// @ts-expect-error
import spec from '~/../../spec/supabase_js_v2.yml' assert { type: 'yml' }
import RefSectionHandler from '~/components/reference/RefSectionHandler'
import { flattenSections } from '~/lib/helpers'
import handleRefGetStaticPaths from '~/lib/mdx/handleRefStaticPaths'
import handleRefStaticProps from '~/lib/mdx/handleRefStaticProps'

const sections = flattenSections(clientLibsCommonSections)

export default function JSReference(props) {
  console.log(props)
  // console.info(new Blob([JSON.stringify(props)]).size) // 38
  return (
    <RefSectionHandler
      sections={sections}
      spec={spec}
      typeSpec={typeSpec}
      pageProps={props}
      type="client-lib"
    />
  )
}

export async function getStaticProps() {
  return handleRefStaticProps(sections, '/javascript', spec)
}

export function getStaticPaths() {
  return handleRefGetStaticPaths()
}
