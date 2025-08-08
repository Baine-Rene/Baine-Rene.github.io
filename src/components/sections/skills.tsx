import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "html5",
    "astro",
    "nextdotjs",
    "css",
    "java",
    "git",
    "github",
    "visualstudiocode",
    "figma",
];

export function IconCloudDemo() {
    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
    );

    return (
        <div>
            <h2 className="text-white text-2xl mt-6 font-semibold">Skills</h2>
            <div className="relative flex size-full items-center justify-center overflow-hidden">
                <IconCloud images={images} />
            </div>
        </div>
    );
}
