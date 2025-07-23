import { icons } from "common/icons";

export const HERO_CONTENT = `Tôi là lập trình viên fullstack có khả năng tạo ra các ứng dụng web và API tối ưu, nhẹ và nhanh. Với 1 năm kinh nghiệm thực tiễn, tôi đã mài giũa kỹ năng của mình trong các công nghệ fullstack như Laravel, NestJS, ReactJS, NextJS. Mục tiêu của tôi là tận dụng chuyên môn của mình để tạo ra các trang web và tối ưu hiệu năng để thúc đẩy tăng trưởng kinh doanh cho doanh nghiệp và mang lại trải nghiệm mượt mà cho người dùng.`;

export const EXPERIENCES = [
  {
    year: "08/2023 - 07/2024",
    role: "Lập trình viên backend",
    company: "Công ty TNHH Di4l",
    description: `Làm việc chung với nhóm phát triển và duy trì các ứng dụng web CMS bằng Laravel, HTML, CSS, JS, Tailwind CSS theo yêu cầu của khách hàng. Kết nối đến CSDL MySQL và triển khai các Rest API cho các ứng dụng mobile và web. Tích hợp với các phương thức thanh toán bên thứ 3 (VNPay, Onepay, Momo) và SMS OTP. Phát triển ứng dụng mobile bằng flutter`,
    technologies: ["PHP", "Laravel", "HTML", "CSS", "JS", "MySQL", "Tailwind CSS", "Bootstrap"]
  },
  {
    year: "08/2024 - 08/2025",
    role: "Lập trình viên fullstack.",
    company: "Công ty cổ phần & thương mại Future Life",
    description: `Làm việc với nhóm IT của công ty để phát triển và duy trì các ứng dụng web bán hàng, landing page và CMS bằng React, Next.js và Nest JS theo yêu cầu của công ty. Kết nối đến CSDL MongoDB bằng Nest JS để triển khai các Rest API cho các ứng dụng web`,
    technologies: ["Typescript", "HTML", "CSS", "ReactJS", "Next.js", "Nest JS", "Tailwind CSS", "Material UI"]
  },
];
// https://play.google.com/store/apps/details?id=g47.delivery.di4l.vn
export const PROJECTS = [
  {
    id: "future-life-landing-website",
    title: "Future Life Landing Website",
    image: './assets/future-life-landing-website.png',
    description: "Website giới thiệu về các thông tin của công ty như các dự án đang thực hiện, lĩnh vực, ban quản trị, tin tức giúp cho các nhà đầu tư hiểu rõ hơn về công ty.",
    link: "https://www.futurelifeecom.com/",
    technologies: ["Next.js", "HTML", "CSS", "SCSS"],
  },
  {
    id: "future-life-e-commerce-website",
    title: "Future Life E-commerce Website",
    image: './assets/future-life-ecommerce-website.png',
    description: "Website bán hàng của công ty cổ phần thương mại và phát triển Future Life, bao gồm giỏ hàng, áp dụng mã giảm giá, đăng nhập xác thực bằng JWT.",
    link: "https://fl-ecommerce-web-user.vercel.app/",
    technologies: ["Next.js", "Nest JS", "MongoDB", "HTML", "CSS", "Tailwind CSS", "Redux", "JWT"],
  },
  {

    id: "app-dat-xe",
    title: "App đặt xe",
    image: './assets/sod-app.png',
    description: "App đặt xe, giao hàng, gọi đồ ăn, thuê xe và thuê dịch vụ cho khách hàng trên nền tảng android và ios",
    link: "https://play.google.com/store/apps/details?id=ungdung.sod.vn&hl=en",
    technologies: ["Flutter"],
  },
  {
    id: "sod-cms-website",
    title: "SOD CMS Website",
    image: './assets/sod-cms-website.png',
    description: "Website CMS giúp cho admin quản lý tài xế, phương tiện và đơn hàng, giúp tài xế quản lý đơn hàng cùng với các tính năng như phân quyền, xác thực người dùng.",
    link: "https://sod.di4l.vn/",
    technologies: ["PHP", "Laravel", "HTML", "CSS", "Javascript", "Tailwind CSS", "MySQL"],
  },
  {
    id: "voucher-for-you-cms-website",
    title: "Voucherforyou CMS Website",
    image: './assets/cms_voucherforyou.png',
    description: "Website E-commerce bao gồm CMS giúp cho doanh nghiệp quản lý thông tin doanh nghiệp, khách hàng, tồn kho, sản phẩm, lợi nhuận của họ và thống kê doanh số.",
    link: "https://voucherforyou.di4lsell.com/",
    technologies: ["PHP", "Laravel", "HTML", "CSS", "Javascript", "Bootstrap", "MySQL"],
  },
  {
    id: "video-call-website",
    title: "Video Call Website",
    image: './assets/video-call-website.png',
    description: "Website cho gọi video giữa 2 người dùng khác nhau bằng cách áp dụng socket.io và WebRTC.",
    link: "https://react-video-website-ten.vercel.app/",
    technologies: ["Next.js", "HTML", "CSS", "Typescript", "Material UI", "Socket.io", "WebRTC"],
  },
  {
    id: "anh-sang-tu-thien-website",
    title: "Ánh Sáng Từ Thiện Landing Website",
    image: './assets/anhsangtuthien-landing-website.png',
    description: "Website landing page giới thiệu thông tin về các hoạt động từ thiện của tổ chức ánh sáng từ thiện, có liên kết đến API của google youtube để hiển thị danh sách các video của họ.",
    link: "https://anhsangtuthien.com/",
    technologies: ["React", "HTML", "CSS", "Tailwind CSS", "NestJS", "MongoDB"],
  },
  {
    id: "music-player-website",
    title: "Music Player Website",
    image: './assets/music-player-website.png',
    description: "Website lấy thông tin danh sách nhạc, nhạc sĩ, danh sách phát, stream bài hát và stream music video từ API của zingmp3. Giao diện cũng lấy cảm hứng từ zingmp3.",
    link: "https://music-player-website-olive.vercel.app/",
    technologies: ["React", "Nest JS", "HTML", "CSS", "Tailwind CSS", "Redux"],
  },
  {
    id: "63Car-showroom-website",
    title: "63Car Showroom Website",
    image: './assets/car-showroom-website.png',
    description: "Website showroom các loại xe ô tô 4 bánh.",
    link: "https://car-ecommerce-web-user.vercel.app/",
    technologies: ["Next.js", "Nest JS", "HTML", "CSS", "Tailwind CSS", "MongoDB"],
  },
  {
    id: "anime-figure-website",
    title: "Anime Figure Website",
    image: './assets/anime-figure-website.png',
    description: "Website bán mô hình anime.",
    link: "https://wibu-website.vercel.app/",
    technologies: ["Next.js", "Nest JS", "HTML", "CSS", "Material UI", "Redux", "MongoDB"],
  },
];

export const CONTACT = {
  address: "Địa chỉ: Hồ Chí Minh, Việt Nam",
  phoneNo: "Số điện thoại: 0932430072",
  email: "Email: tien23851@gmail.com",
  birthday: "Ngày sinh: 14/11/2001",
  name: "Họ tên: Nguyễn Vĩnh tiến"
};

export const EDUCATIONS = [
  {
    school: 'Đại Học Sài Gòn',
    year: '08/2019 - 08/2023',
    gpa: '2.91/4',
    branch: 'IT - Công nghệ thông tin/phần mềm'
  }
]

export const CERTIFICATES = [
  {
    name: 'Chứng chỉ TOEIC',
    description: '2 Kỹ năng đọc và nghe',
    score: 925
  },
  {
    name: 'Bằng cử nhân',
    description: 'Bằng cử nhân tốt nghiệp loại khá',
  }
]

const { SiFlutter, SiNestjs, SiWebrtc, SiRedux, BiLogoTypescript, FaLaravel, FaPhp, SiSocketdotio, SiMysql, SiMongodb, TiHtml5, SiCss3, IoLogoJavascript, FaBootstrap, RiReactjsLine, RiNextjsFill, RiTailwindCssFill, FaDocker, SiPostman, BsGit, SiMui, SiJsonwebtokens } = icons

export const techStacks = [
  {
    type: 'Ngôn ngữ lập trình',
    items: [
      {
        name: "PHP",
        color: "#4f5c93",
        icon: <FaPhp />
      },
      {
        name: "HTML",
        color: "#e04e34",
        icon: <TiHtml5 />
      },
      {
        name: "CSS",
        color: "#264ee4",
        icon: <SiCss3 />
      },
      {
        name: "Javascript",
        color: "#fdd734",
        icon: <IoLogoJavascript />
      },
      {
        name: "Typescript",
        color: "#2f74c0",
        icon: <BiLogoTypescript />
      }
    ]
  },
  {
    type: "Frameworks",
    items: [
      {
        name: "Next.js",
        color: "#ffffff",
        icon: <RiNextjsFill />
      },
      {
        name: "Laravel",
        color: "#ff2d20",
        icon: <FaLaravel />
      },
      {
        name: "Nest JS",
        color: "#df224e",
        icon: <SiNestjs />
      },
      {
        name: "Flutter",
        color: "#53c5f9",
        icon: <SiFlutter />
      },
    ]
  },
  {
    type: "Thư viện",
    items: [
      {
        name: "React",
        color: "#60dbfc",
        icon: <RiReactjsLine />
      },
      {
        name: "Tailwind CSS",
        color: "#09b6d6",
        icon: <RiTailwindCssFill />
      },
      {
        name: "Material UI",
        color: "#066cdb",
        icon: <SiMui />
      },
      {
        name: "Bootstrap",
        color: "#8311ff",
        icon: <FaBootstrap />
      },
      {
        name: "Redux",
        color: "#7f42c3",
        icon: <SiRedux />
      },
      {
        name: "Socket.io",
        color: "#4C4B4B",
        icon: <SiSocketdotio />
      },
    ]
  },
  {
    type: "Công cụ",
    items: [
      {
        name: "Git",
        color: "#ed492c",
        icon: <BsGit />
      },
      {
        name: "Docker",
        color: "#3b96df",
        icon: <FaDocker />
      },
      {
        name: "Postman",
        color: "#e34c1c",
        icon: <SiPostman />
      },
    ]
  },
  {
    type: "Công nghệ",
    items: [
      {
        name: "JWT",
        color: "#ffffff",
        icon: <SiJsonwebtokens />
      },
      {
        name: "WebRTC",
        color: "#ffffff",
        icon: <SiWebrtc />
      },
    ]
  },
  {
    type: "Cơ sở dữ liệu",
    items: [
      {
        name: "MySQL",
        color: "#00618a",
        icon: <SiMysql />
      },
      {
        name: "MongoDB",
        color: "#439944",
        icon: <SiMongodb />
      },
    ]
  }
]