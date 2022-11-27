import React from "react";

const Card = ({data}) => {
  return (
    <div className="bg-blue-900 mx-6 my-6 h-72 rounded-md flex flex-col">
      <div className="text-lg font-semibold pt-4 flex justify-center px-9 text-center text-white">
       {data.tournament[0].name}
      </div>

      <div className=" flex justify-center align-middle text-md font-semibold mt-2 text-white">
        {data.round}
      </div>

      <div className="flex mt-4">
        <div className="flex flex-col mx-4 w-3/12 items-center justify-center">
          <a>
            <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/08f830ae-ce65-42f5-b243-b7a3f8a15b5f/crown.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221127T091056Z&X-Amz-Expires=86400&X-Amz-Signature=acf95ece54b2ffcea5cff11b66aca42de83702bf8b887ff639186807ef3844a6&X-Amz-SignedHeaders=host&x-id=GetObject"></img>
          </a>
          <a>
            <img
              className="h-12 w-12 rounded-full"
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"
            ></img>
          </a>
          <div className="flex items-center justify-center text-center font-semibold text-white">
           {data.team1[0].name}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="text-white">v/s</div>
          <div className="bg-green-700 py-1 rounded-md my-2 px-1 text-white">
            {data.a1}-{data.b1}, {data.a2}-{data.b2}, {data.a3}-{data}
          </div>
          <a>
            <img
              className="h-20 w-20 mt-1"
              src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/da00ca61-beb4-4735-8ff8-f6cff8597fc3/logo_white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221127T082650Z&X-Amz-Expires=86400&X-Amz-Signature=e022d71f6841e49e0ab5bb8b43212b92a42da882766a03c89a2558103e1b3872&X-Amz-SignedHeaders=host&x-id=GetObject"
            ></img>
          </a>
        </div>

        <div className="flex flex-col mx-4 w-3/12 items-center justify-center">
          <a>
            <img
              className="h-12 w-12 rounded-full"
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"
            ></img>
          </a>
          <div className="flex items-center justify-center text-center font-semibold text-white">
            {data.team2[0].name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
