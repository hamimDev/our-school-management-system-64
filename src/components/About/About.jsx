import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const About = () => {
  const about = useLoaderData();
  console.log(about);

  return (
    <div className="mt-[123px]  bg-lime-900 pt-5 pb-5">
      <h1 className="text-center text-4xl lg:text-8xl text-white italic pt-4 underline hover:text-stone-900">
        About Us
      </h1>
      <h1 className="mt-5 text-base text-center p-4 text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel,
        temporibus odio debitis totam incidunt saepe atque perferendis quas
        mollitia consequatur voluptatem. Vel saepe sunt voluptas iusto impedit
        ea. Numquam reprehenderit aperiam dolor expedita reiciendis praesentium
        repellendus nihil, aut harum cupiditate possimus ea rerum porro,
        dolorem, libero hic? Debitis similique nemo suscipit eum, voluptas a
        vitae omnis? Voluptatem atque maxime eos ipsa optio nihil eaque porro
        soluta accusamus ab. Ut pariatur officia necessitatibus consequuntur!
        Nesciunt reprehenderit optio voluptatem unde est qui non consequuntur
        natus quis veritatis, explicabo similique exercitationem iure aperiam et
        totam quaerat possimus vitae sapiente repellat, voluptatibus eius sunt.
        
        Voluptatum accusamus nemo eius quia laborum ipsum, voluptas minus soluta
        a adipisci ducimus earum aliquid in porro perferendis cum eos amet
        impedit similique totam velit nobis libero quibusdam? Reprehenderit ea
        quo omnis, ipsum ex recusandae, tempora nobis laborum doloremque
        possimus voluptatem sapiente quae laboriosam perferendis qui aperiam et
        praesentium, veritatis saepe. Suscipit corporis aperiam accusantium
        voluptas dignissimos! Aspernatur inventore hic in earum officiis ducimus
        distinctio, aut molestias eaque rem saepe totam ipsa fuga ipsum ea
        atque, nobis mollitia. Quas tempore, architecto odit id quis vel placeat
        itaque beatae doloremque corrupti nobis. Aspernatur magni, ipsa qui
        explicabo possimus unde sit amet deserunt. Consequatur natus, rerum
        facilis, nisi est nemo illum vero omnis quis soluta nulla! Praesentium
        reprehenderit, repudiandae, est magni nostrum quos alias error
        doloremque asperiores aliquid fugit aliquam! Harum quae suscipit nihil
        obcaecati voluptatibus recusandae natus cupiditate animi consequatur.
        Officiis ipsa provident quod officia ex sequi qui rerum itaque
        reiciendis! Minima repellat rem qui enim iste est eaque perferendis
        ipsum blanditiis. Aperiam sequi excepturi sapiente repellat nobis
        quidem, commodi magnam voluptatibus harum, unde fugiat iure. Molestiae
        ea corporis itaque delectus, eveniet magnam totam doloribus neque ipsam
        aliquid perferendis rerum ipsa sint aspernatur. Laboriosam consequatur
        facere harum! Minus eligendi inventore voluptas nisi harum nam sit
        perspiciatis aspernatur quod sunt animi corrupti eos magnam corporis
        veritatis unde, accusantium reiciendis asperiores. Praesentium quam
        deleniti ullam nobis, voluptas fuga, nemo, repudiandae quas eveniet
        voluptatibus tempore culpa nisi doloremque optio rem voluptate cumque?
        Laudantium corrupti est modi hic minima. Natus corrupti nostrum,
        incidunt consequuntur iure quas ut ex perferendis cupiditate at. Labore
        aliquid natus officia molestias deleniti, sit libero perferendis!
        Accusantium, optio unde eos fugit doloribus sequi similique aspernatur
        est officia harum asperiores recusandae dicta adipisci doloremque? Ipsum
        blanditiis, aliquid autem, fuga nihil dolor error repudiandae cum,
        assumenda laudantium repellat. Sequi delectus quasi voluptate, tenetur,
        assumenda eligendi dignissimos non nostrum quisquam quidem saepe optio
        temporibus. Voluptatum et recusandae mollitia. Dolorem esse odio
        similique temporibus!
      </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-3 mt-7">
        <div className="text-center bg-green-500 p-4 mr-5 rounded-3xl ml-5 mb-5">
          <h1 className="text-2xl font-bold text-slate-800">
          Institution Name: {about.about_us.school_name}.
          </h1>

          <h1 className="text-2xl font-bold text-slate-800 mt-2">
            Established Was: {about.about_us.founding_year}.
          </h1>
          <h1 className="text-2xl font-bold text-slate-800 mt-2">
            Location: {about.about_us.location}.
          </h1>
          <h1 className="text-lg font-bold text-slate-800 mt-2">
          Institution Statement: {about.about_us.vision_statement}.
          </h1>
        </div>
        <div className="text-center bg-yellow-800 p-4 mr-5 rounded-3xl ml-5 mb-5">
          <h1 className="text-2xl font-bold text-slate-800">
            Principal Name: {about.about_us.principal.name}
          </h1>

          <h1 className="text-3xl font-bold text-slate-800 mt-2">
            Experience Years: {about.about_us.principal.experience_years}
          </h1>
          <h1 className="text-1xl font-bold text-slate-800 mt-2">
          Email: {about.about_us.principal.email}
          </h1>
          <h1 className="text-3xl font-bold text-slate-800 mt-2">
          Phone: {about.about_us.principal.phone}
          </h1>
          <h1 className="text-sm font-bold text-slate-800 mt-2">
          Principal Statement: {about.about_us.mission_statement}
          </h1>
          
        </div>
        <div className="text-center bg-blue-500 p-4 mr-5 rounded-3xl ml-5 mb-5">
          <h1 className="text-3xl font-bold text-slate-800">
            Address: {about.about_us.contact_information.address}
          </h1>

          <h1 className="text-1xl font-bold text-slate-800 mt-2">
            Email: {about.about_us.contact_information.email}
          </h1>
          <h1 className="text-3xl font-bold text-slate-800 mt-2">
            Phone: {about.about_us.contact_information.phone}
          </h1>
          <div className="flex gap-4 items-center justify-center mt-5">
            <Link to={about.about_us.social_media.facebook}>
              <img
                className="w-[50px]"
                src="https://www.facebook.com/images/fb_icon_325x325.png"
                alt=""
              />
            </Link>

            <Link to={about.about_us.social_media.twitter}>
              <img
                className="w-[50px] rounded-full"
                src="https://pbs.twimg.com/profile_images/1683364031921356800/lC0xkPJZ_400x400.jpg"
                alt=""
              />
            </Link>

            <Link to={about.about_us.social_media.instagram}>
              <img
                className="w-[50px] rounded-full"
                src="https://img.freepik.com/premium-vector/modern-badge-logo-instagram-icon_578229-124.jpg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
