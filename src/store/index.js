import Vue from "vue";
import Vuex from "vuex";
import {
  getAuthFromCookie,
  saveAuthToCookie,
  deleteCookie,
} from "@/utils/cookies";
import { loginUser } from "@/api/auth";
import { fetchProfile } from "@/api/user";
import { logoutUser } from "../api/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nickname: "",
    loginState: false,
    accessToken: "" || getAuthFromCookie(),
    refreshToken: "" || localStorage.getItem("refreshToken"),
    oauthInfo: "" || localStorage.getItem("oauthInfo"),
  },
  getters: {
    // 로그인 여부 확인
    isLogin(state) {
      return state.loginState == true;
    },
    // 소셜 로그인 여부
    isOauthLogin(state) {
      return state.oauthInfo !== "";
    },
  },
  mutations: {
    setAccessToken(state, token) {
      state.accessToken = token;
    },
    setRefreshToken(state, token) {
      state.refreshToken = token;
    },
    setNickname(state, nickname) {
      state.nickname = nickname;
    },
    // 로그아웃 (닉네임, 토큰 삭제)
    logoutUser(state) {
      state.nickname = "";
      state.accessToken = "";
      state.refreshToken = "";
      deleteCookie("accessToken");
      localStorage.removeItem("refreshToken");
    },
    setLoginState(state, loginState) {
      state.loginState = loginState;
    },
  },
  actions: {
    // 로그인
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      commit("setRefreshToken", data.refresh_token);
      saveAuthToCookie(data.access_token);
      localStorage.setItem("refreshToken", data.refresh_token);
      const response = await fetchProfile();
      commit("setNickname", response.data.name);
      return data;
    },
    // 프로필 조회이자 로그인 여부 확인
    async FETCH_PROFILE(commit) {
      try {
        const { response } = await fetchProfile();
        commit("setNickname", response.data.name);
        console.log("여긴 vuex, 로그인 여부 확인중", response);
        if (response.data.statusCode == 200) {
          commit("setLoginState", true);
        }
      } catch (error) {
        console.log(error);
        if (error.response.data.statusCode == 401) {
          commit("setLoginState", false);
        }
      }
    },
    // 로그아웃
    async LOGOUT(commit) {
      try {
        const { response } = await logoutUser(this.state.refreshToken);
        console.log("로그아웃", response);
        commit("logoutUser");
      } catch (error) {
        console.log(error);
      }
    },
  },
});
