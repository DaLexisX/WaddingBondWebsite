declare module 'react-vertical-timeline-component' {
  import { ReactNode, CSSProperties } from 'react';

  export interface VerticalTimelineProps {
    children?: ReactNode;
    className?: string;
    layout?: '1-column' | '2-columns';
    animate?: boolean;
    lineColor?: string;
  }

  export interface VerticalTimelineElementProps {
    children?: ReactNode;
    className?: string;
    contentStyle?: CSSProperties;
    contentArrowStyle?: CSSProperties;
    date?: string;
    dateClassName?: string;
    icon?: ReactNode;
    iconClassName?: string;
    iconStyle?: CSSProperties;
    iconOnClick?: () => void;
    position?: 'left' | 'right';
    textClassName?: string;
  }

  export const VerticalTimeline: React.FC<VerticalTimelineProps>;
  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
}

