'use client';

import logoImg from '@public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { PiAppleLogoFill, PiArrowLeftBold } from 'react-icons/pi';
import { Button, Text, Title } from 'rizzui';
import OrSeparation from './or-separation';

export default function AuthWrapperOne({
  children,
  title,
  bannerTitle,
  bannerDescription,
  description,
  pageImage,
  isSocialLoginActive = false,
  isSignIn = false,
}: {
  children: React.ReactNode;
  title: React.ReactNode;
  description?: string;
  bannerTitle?: string;
  bannerDescription?: string;
  pageImage?: React.ReactNode;
  isSocialLoginActive?: boolean;
  isSignIn?: boolean;
}) {
  function handleSignIn() {
    toast.error(
      <Text>
        This is only demo purpose, click on the{' '}
        <Text as="b" className="font-semibold text-gray-900">
          Sign In
        </Text>{' '}
        button to login.
      </Text>
    );
  }
  return (
    <>
      <Link
        href={'/'}
        className="sticky start-0 top-0 z-20 flex items-center justify-center bg-amber-600 p-3.5 text-sm font-medium text-white md:p-4 lg:hidden"
      >
        <PiArrowLeftBold />
        <Text className="ms-1 font-lexend">Back to home</Text>
      </Link>

      <div className="min-h-screen justify-between gap-x-8 lg:flex xl:gap-x-10 [&>div]:min-h-[calc(100vh-80px)]">
        <div className="relative flex w-full items-center justify-center lg:w-5/12 2xl:justify-end 2xl:pe-24">
          <div className="w-full max-w-sm md:max-w-md lg:py-7 lg:ps-3 lg:pt-16 2xl:w-[630px] 2xl:max-w-none 2xl:ps-20 2xl:pt-7">
            <Link
              href={'/'}
              className="sticky start-0 top-0 z-20 mb-14 hidden  items-center justify-start text-sm font-medium text-amber-500 lg:flex"
            >
              <PiArrowLeftBold />
              <Text className="ms-1 font-lexend">Back to home</Text>
            </Link>
            <div className="mb-7 px-6 pt-3 text-center md:pt-0 lg:px-0 lg:text-start xl:mb-8 2xl:mb-10">
              <Link
                href={'/'}
                className="mb-6 inline-flex max-w-[168px] xl:mb-8"
              >
                <Image src={logoImg} alt="Kasirku" />
              </Link>
              <Title
                as="h2"
                className="mb-5 text-[26px] leading-snug md:text-3xl md:!leading-normal lg:mb-7 lg:pe-16 lg:text-[28px] xl:text-3xl 2xl:pe-8 2xl:text-4xl"
              >
                {title}
              </Title>
              <Text className="leading-[1.85] text-gray-700 md:leading-loose lg:pe-8 2xl:pe-14">
                {description}
              </Text>
            </div>
            {isSocialLoginActive && (
              <>
                <div className="grid grid-cols-1 gap-4 pb-5 md:grid-cols-2 md:pb-6 xl:gap-5 xl:pb-7">
                  <Button
                    onClick={() =>
                      // it should be signIn('apple')
                      handleSignIn()
                    }
                    variant="outline"
                    className="h-11 w-full"
                  >
                    <PiAppleLogoFill className="me-2 h-4 w-4 shrink-0" />
                    <span className="truncate">Signin With Apple</span>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      // it should be signIn('google')
                      handleSignIn()
                    }
                    className="h-11 w-full"
                  >
                    <FcGoogle className="me-2 h-4 w-4 shrink-0" />
                    <span className="truncate">Signin With Google</span>
                  </Button>
                </div>
                <OrSeparation title="OR" className="mb-5 2xl:mb-7" isCenter />
              </>
            )}

            {children}
          </div>
        </div>
        <div className="hidden items-center justify-center bg-[url('/images/bg-auth.jpg')] bg-cover bg-center dark:bg-gray-100/40 lg:flex xl:justify-start">
          <div className="pb-8 pt-10 text-center xl:pt-16 2xl:block 2xl:w-[1063px]"></div>
        </div>
      </div>
    </>
  );
}