import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CNav() {
  const router = useRouter();

  return (
    <div id='nav'>
      <div className="nav-left">
        <Image src={'/assets/images/logo.png'} width={208} height={44} id='logoCamperLink' />
      </div>

      <div id='navRight' className={`nav-right`}>


        <div className="language">
          <Link
            href={`${router.asPath}`}
            locale={'nl'}
          >
            <img data-v-365d8aff="" src="/assets/images/ic_dutch.png" className="base-image locale current"></img>
          </Link>
          <Link
            href={`${router.asPath}`}
            locale={'en'}
          >
            <img data-v-365d8aff="" src="/assets/images/ic_english.png" className="base-image locale"></img>
          </Link>
          <img data-v-365d8aff="" src="/assets/images/ic_french.png" className="base-image locale"></img>
          <img data-v-365d8aff="" src="/assets/images/ic_german.png" className="base-image locale"></img>
        </div>

      </div>
    </div>
  )
}