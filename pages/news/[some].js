import { useRouter } from 'next/router';

function SomePage(){

  const router = useRouter();

  console.log(router.query.some);

  return<h1>
    The Some Page
  </h1>
}

export default SomePage;