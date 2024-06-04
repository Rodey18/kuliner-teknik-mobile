import {StyleSheet} from 'react-native';

export const COLOR = {
  color10: 'rgb(178, 94, 0)',
  color30: 'rgb(0, 0, 0)',
  color60: 'rgb(255, 255, 255)',
  gray: 'rgb(232, 232, 230)',
  red: 'rgb(234, 0, 31)',
  line: 'rgb(217, 217, 217)',
  star: 'rgb(255, 196, 28)',
  nostar: 'rgb(178, 176, 170)',
  green: 'rgb(71, 166, 55)',
};

export const FONT = StyleSheet.create({
  title: {
    fontFamily: 'DMSans-Bold',
    fontSize: 20,
    lineHeight: 28,
    color: COLOR.color30,
  },
  subtitle: {
    fontFamily: 'DMSans-Bold',
    fontSize: 16,
    lineHeight: 24,
    color: COLOR.color30,
  },
  identifier: {
    fontFamily: 'DMSans-Medium',
    fontSize: 14,
    lineHeight: 20,
    color: COLOR.color30,
  },
  content: {
    fontFamily: 'DMSans-Regular',
    fontSize: 12,
    lineHeight: 16,
    color: COLOR.color30,
  },
  detail: {
    fontFamily: 'DMSans-Regular',
    fontSize: 10,
    lineHeight: 14,
    color: COLOR.color30,
  },
});

export const CONTAINER = StyleSheet.create({
  flexbox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexgap8: {
    gap: 8,
  },
  flexgap16: {
    gap: 16,
  },
  checkbox: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  flexrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const ICON = StyleSheet.create({
  icon24: {
    fontSize: 24,
    lineHeight: 32,
    color: COLOR.color30,
  },
});

export const IMG = StyleSheet.create({
  logo: {
    borderRadius: 999,
    elevation: 8,
    shadowColor: COLOR.color30,
  },
});

export const CHECKBOX = StyleSheet.create({
  off: {
    borderColor: COLOR.line,
    borderRadius: 4,
    borderWidth: 1,
    width: 16,
    height: 16,
  },
  active: {
    height: 16,
    width: 16,
    backgroundColor: COLOR.color10,
    borderRadius: 4,
  },
});
