import React, { useContext } from "react";
import { UserContext } from "../../App";

const Profile = () => {
  let value = useContext(UserContext);
  const { data, setVisible } = value;
  console.log(data);

  return (
    <div onClick={() => setVisible(false)} className=" mr-12 mt-8">
      {/* body */}
      <div className="flex">
        <div className="w-[40%]">
          <img
            className="w-[50%] mx-auto rounded-[50%]"
            src={data.profilepicture}
          ></img>
          <p className="text-center font-medium text-[18px] text-[#545454]">
            {data.name}
          </p>
          <div className=" ml-[70px] mr-2">
            <div className="flex py-1">
              <p className="text-[#b2b2b2]">Username&nbsp; :&nbsp; </p>{" "}
              <p className="font-medium text-[18px] text-[#545454]">
                &nbsp; {data.username}
              </p>
            </div>
            <div className="flex py-1">
              <p className="text-[#b2b2b2]">e-mail&nbsp; :&nbsp;</p>{" "}
              <p className="font-medium text-[18px] text-[#545454]">
                &nbsp; {data.email}
              </p>
            </div>
            <div className="flex py-1">
              <p className="text-[#b2b2b2]">phone&nbsp; :&nbsp;</p>{" "}
              <p className="font-medium text-[18px] text-[#545454]">
                &nbsp; {data.phone}
              </p>
            </div>
            <div className="flex pt-1 pb-2">
              <p className="text-[#b2b2b2]">Website&nbsp; :&nbsp;</p>{" "}
              <p className="font-medium text-[18px] text-[#545454]">
                &nbsp; {data.website}
              </p>
            </div>
            <hr></hr>
            <div className="flex py-2 justify-center">
              <p className="text-[#b2b2b2] mr-[70px]">Company</p>
            </div>
            <div className="flex py-1">
              <p className="text-[#b2b2b2]">Name&nbsp; :&nbsp;</p>{" "}
              <p className="font-medium text-[18px] text-[#545454]">
                &nbsp; {data.company.name}
              </p>
            </div>
            <div className="flex py-1">
              <p className="text-[#b2b2b2]">catchphrase&nbsp;</p>{" "}
              <p className="font-medium text-[18px] text-[#545454]">
                :&nbsp;&nbsp; {data.company.catchPhrase}
              </p>
            </div>
            <div className="flex py-1">
              <p className="text-[#b2b2b2]">bs&nbsp;</p>
              <p className="font-medium text-[18px] text-[#545454]">
                :&nbsp;&nbsp; {data.company.bs}
              </p>
            </div>
          </div>
        </div>
        <div className="w-[60%] border-l px-10">
          <div className="flex py-1">
            <p className="text-[#b2b2b2]">Address:</p>
          </div>
          <div className="ml-[50px]">
            <div className="flex py-1">
              <p className="text-[#b2b2b2]">Street&nbsp; :&nbsp;</p>{" "}
              <p className="font-medium text-[18px] text-[#545454]">
                &nbsp; {data.address.street}
              </p>{" "}
            </div>
            <div className="flex py-1">
              <p className="text-[#b2b2b2]">Suite&nbsp; :&nbsp;</p>{" "}
              <p className="font-medium text-[18px] text-[#545454]">
                &nbsp; {data.address.suite}{" "}
              </p>
            </div>
            <div className="flex py-1">
              <p className="text-[#b2b2b2]">City&nbsp; :&nbsp;</p>{" "}
              <p className="font-medium text-[18px] text-[#545454]">
                {" "}
                &nbsp; {data.address.city}
              </p>{" "}
            </div>
            <div className="flex py-1">
              <p className="text-[#b2b2b2]">Zipcode&nbsp; :&nbsp;</p>{" "}
              <p className="font-medium text-[18px] text-[#545454]">
                {" "}
                &nbsp; {data.address.zipcode}
              </p>{" "}
            </div>
          </div>
          <div>
            <iframe
              className="w-full h-[300px] rounded-[10px]"
              src={`https://maps.google.com/maps?q=${data.address.city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            ></iframe>
            <div className="flex justify-end mt-2 my-atuo">
              <p className="text-[12px] text-[#a2a2a2]">Lat: &nbsp;</p>
              <p className="text-[13px] font-medium text-[#444444]">
                {data.address.geo.lat}
              </p>
              <p className="text-[12px] text-[#a2a2a2] ml-2">Lng: &nbsp;</p>
              <p className="text-[13px] font-medium text-[#444444]">
                {data.address.geo.lng}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
