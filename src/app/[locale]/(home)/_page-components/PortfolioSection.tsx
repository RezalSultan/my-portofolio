import FlowingMenu from "@/components/animation/FlowingMenu";
import ScrollVelocity from "@/components/animation/ScrollVelocity";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";

const portfolioItems: any = [
	// Web Development (4)
	{
		category: "Web Development",
		slug: "web-development",
		image: "https://picsum.photos/600/400?random=1",
		title: "Company Profile Website",
		desc: "Sebuah website company profile yang dirancang dengan tampilan modern dan responsif untuk memperkenalkan identitas perusahaan secara profesional. Website ini mencakup halaman tentang kami, layanan, kontak, dan galeri.",
		tanggal: "2024-04-15",
	},
	{
		category: "Web Development",
		slug: "web-development",
		image: "https://picsum.photos/600/400?random=2",
		title: "E-Commerce Platform",
		desc: "Platform e-commerce yang memungkinkan pengguna untuk melakukan transaksi jual beli produk secara online dengan fitur seperti keranjang belanja, sistem pembayaran terintegrasi, pelacakan pesanan, serta dashboard admin untuk manajemen produk dan pengguna.",
		tanggal: "2024-03-30",
	},
	{
		category: "Web Development",
		slug: "web-development",
		image: "https://picsum.photos/600/400?random=3",
		title: "Blog CMS",
		desc: "Sebuah sistem manajemen konten (CMS) yang memungkinkan pengguna untuk membuat, mengedit, dan mempublikasikan artikel blog. Platform ini juga mendukung kategori, tag, komentar, serta optimasi SEO dan manajemen pengguna.",
		tanggal: "2024-02-20",
	},
	{
		category: "Web Development",
		slug: "web-development",
		image: "https://picsum.photos/600/400?random=4",
		title: "Dashboard Admin",
		desc: "Sebuah dashboard admin yang dibangun untuk kebutuhan monitoring dan manajemen data internal. Menampilkan data dalam bentuk visualisasi grafik, tabel interaktif, dan memiliki sistem autentikasi serta peran pengguna yang terstruktur.",
		tanggal: "2024-01-10",
	},

	// UI UX Design (4)
	{
		category: "UI UX Design",
		slug: "ui-ux-design",
		image: "https://picsum.photos/600/400?random=5",
		title: "Mobile Banking App UI",
		desc: "Desain antarmuka pengguna untuk aplikasi mobile banking yang berfokus pada kemudahan navigasi, keamanan, dan pengalaman pengguna yang intuitif. Fitur utama termasuk transfer dana, cek saldo, riwayat transaksi, dan QR payment.",
		tanggal: "2024-04-05",
	},
	{
		category: "UI UX Design",
		slug: "ui-ux-design",
		image: "https://picsum.photos/600/400?random=6",
		title: "Travel Booking Website",
		desc: "Desain UI/UX untuk platform pemesanan tiket dan hotel yang menyediakan alur pemesanan yang sederhana dan user-centric. Termasuk pencarian berdasarkan lokasi dan tanggal, filter harga, serta tampilan responsive untuk berbagai perangkat.",
		tanggal: "2024-03-18",
	},
	{
		category: "UI UX Design",
		slug: "ui-ux-design",
		image: "https://picsum.photos/600/400?random=7",
		title: "Dashboard Analytics UI",
		desc: "Desain antarmuka dashboard analytics dengan tampilan grafik dan visualisasi data yang jelas, mudah dibaca, dan efisien untuk pengambilan keputusan berbasis data. Mengutamakan hierarki visual dan penggunaan warna untuk membedakan metrik penting.",
		tanggal: "2024-02-25",
	},
	{
		category: "UI UX Design",
		slug: "ui-ux-design",
		image: "https://picsum.photos/600/400?random=8",
		title: "E-Learning Platform Design",
		desc: "Desain antarmuka pengguna untuk platform pembelajaran online, dengan fitur-fitur seperti dashboard siswa, modul pembelajaran, forum diskusi, dan sistem penilaian. Fokus pada kenyamanan belajar dan kemudahan akses materi.",
		tanggal: "2024-01-28",
	},

	// Mobile Development (kosong sesuai permintaan)
];

const PortfolioSection = async () => {
	const t = await getTranslations();

	const actionItems = [
		{
			link: "#",
			text: `${t("button.explore-more")}`,
			image: "https://picsum.photos/id/1/600/400",
		},
	];

	return (
		<section className="relative pt-20 pb-32 w-full h-full">
			<div className="w-full px-10 xl:container md:px-20 xl:mx-auto">
				<div className="relative text-foreground font-inria-serif w-full ">
					<p className="text-[clamp(4rem,10cqw,14rem)] leading-[1.1] text-right mr-[560px] 2xl:mr-[750px] 3xl:mr-[950px]">
						{t("portfolio-section.portfolio-1")}
					</p>
					<p className="text-[clamp(4rem,10cqw,14rem)] leading-[1.1] text-center ml-96 -mt-20 2xl:-mt-28 2xl:ml-[400px]">
						{t("portfolio-section.portfolio-2")}
					</p>
				</div>
			</div>
			<div className="relative h-full py-14">
				<div className="overflow-hidden sticky top-5 bottom-96 h-96">
					<ScrollVelocity
						texts={["WEBSITE | ", "WEBSITE |"]}
						velocity={15}
						numCopies={15}
						className="custom-scroll-text font-playfair-display text-[80px] font-bold"
						classNameIndex={["text-foreground", "text-muted"]}
					/>
				</div>

				<div className="w-full px-10 xl:container md:px-20 xl:mx-auto -mt-72">
					<div className="flex flex-col justify-between items-center gap-24 2xl:gap-36 z-30">
						{portfolioItems
							.filter(
								(item: any) =>
									item.category === "Web Development"
							)
							.map((item: any, index: number) => (
								<div
									key={index}
									className={`flex justify-center items-center gap-4 ${
										index % 2 === 0
											? "self-end"
											: "self-start"
									}`}>
									<div className="flex flex-col items-start">
										<div className="overflow-hidden w-[600px] h-[400px] 2xl:w-[824px] 2xl:h-[550px] 3xl:w-[1049px] 3xl:h-[700px] relative">
											<Image
												alt={item.category}
												className="object-cover transition-transform duration-300 group-hover:scale-110 "
												src={item.image}
												fill
											/>
										</div>
										<p className="text-[clamp(1rem,2cqw,3rem)] font-bold text-left text-foreground font-playfair-display z-30">
											{item.title}
										</p>
									</div>
									<div className="flex flex-col justify-center items-center w-full relative gap-2">
										<div className="flex justify-start items-center  relative gap-4">
											<p className="text-[clamp(1.5rem,2cqw,3.5rem)] font-black text-left text-foreground font-playfair-display">
												2024
											</p>
											<div className="h-0.5 w-[242px] bg-foreground" />
										</div>
										<p className="w-[360px] px-10 text-base text-left text-foreground line-clamp-[7]">
											{item.desc}
										</p>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
			<div className="relative h-full py-14">
				<div className="sticky top-5 overflow-hidden bottom-96 h-96">
					<ScrollVelocity
						texts={["UI UX DESIGN | ", "UI UX DESIGN |"]}
						velocity={15}
						numCopies={15}
						className="custom-scroll-text font-playfair-display text-[80px] font-bold "
						classNameIndex={["text-foreground", "text-muted"]}
					/>
				</div>
				<div className="w-full px-10 xl:container md:px-20 xl:mx-auto -mt-72">
					<div className="flex flex-col justify-between items-center gap-24 2xl:gap-36 z-30">
						{portfolioItems
							.filter(
								(item: any) => item.category === "UI UX Design"
							)
							.map((item: any, index: number) => (
								<div
									key={index}
									className={`flex justify-center items-center gap-4 ${
										index % 2 === 0
											? "self-end"
											: "self-start"
									}`}>
									<div className="flex flex-col justify-center items-center w-full relative gap-2">
										<div className="flex justify-start items-center  relative gap-4">
											<div className="h-0.5 w-[242px] bg-foreground" />
											<p className="text-[clamp(1.5rem,2cqw,3.5rem)] font-black text-left text-foreground font-playfair-display">
												2024
											</p>
										</div>
										<p className="w-[360px] px-10 text-base text-right text-foreground line-clamp-[7]">
											{item.desc}
										</p>
									</div>

									<div className="flex flex-col items-start">
										<div className="overflow-hidden w-[600px] h-[400px] 2xl:w-[824px] 2xl:h-[550px] 3xl:w-[1049px] 3xl:h-[700px] relative">
											<Image
												alt={item.category}
												className="object-cover transition-transform duration-300 group-hover:scale-110 "
												src={item.image}
												fill
											/>
										</div>
										<p className="text-[clamp(1rem,2cqw,3rem)] font-bold text-left text-foreground font-playfair-display z-30">
											{item.title}
										</p>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
			<div className="relative h-full py-14">
				<div className="sticky top-5 bottom-96 overflow-hidden h-96">
					<ScrollVelocity
						texts={[
							"MOBILE DEVELOPMENT | ",
							"MOBILE DEVELOPMENT |",
						]}
						velocity={15}
						numCopies={15}
						className="custom-scroll-text font-playfair-display text-[80px] font-bold "
						classNameIndex={["text-foreground", "text-muted"]}
					/>
				</div>
				<div className="w-full px-10 xl:container md:px-20 xl:mx-auto -mt-80">
					<p className="text-[140px] font-bold text-center text-foreground/50 font-inria-serif -rotate-[15.81deg] text-nowrap">
						{t("portfolio-section.cooming-soon")}
					</p>
				</div>
			</div>
			<div className="relative h-[117px] mt-32">
				<FlowingMenu items={actionItems} />
			</div>
		</section>
	);
};

export default PortfolioSection;
