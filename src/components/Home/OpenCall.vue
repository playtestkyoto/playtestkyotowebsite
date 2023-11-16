<template>
  <div>
    <h2>
      <span v-if="locale === 'ja'">OPEN CALL</span>
      <span v-else>Open Call</span>
    </h2>

    <template v-if="locale === 'ja'">
      <h4>
        開催にあたり、ゲームの制作と発表を行うゲームデザイナー、クリエイター、アーティストを募集します。
      </h4>
    </template>
    <template v-else>
      Application form linked in bio 👏
      <br />
      Playtest Kyoto is a three-day event for games and play
      in and across urban spaces. Together with game
      designers, creators, and artists with ties to Kyoto,
      we will create games that anyone from children to the
      elderly can participate in, using public spaces such
      as squares and parks, cultural and creative centers,
      and underutilized real estate in Kyoto City as stages.
      The three-day event will include treasure hunting
      using the entire city block, an on-street challenge in
      which teams are divided to complete missions, and AR
      experiences in the city using apps, traversing the
      digital and physical worlds to redefine Kyoto as a
      city and “play it out.”
      <br />
      For this event, we are looking for game designers,
      creators, and artists to create and present their
      games.
    </template>

    <video autoplay loop muted playsinline>
      <source
        src="/images/home/game.mp4"
        type="video/mp4"
      />
    </video>

    <template v-if="locale === 'ja'">
      <h5>募集概要</h5>
      <ul>
        <li>
          京都市内のさまざまな場所（広場などの公共空間を中心に、公共性のある施設やギャラリーなどもOK）を舞台に、具体的なゲームや遊びの提案
          <ul>
            <li>場所提案型】と【場所自由型】の2種類</li>
            <li>6〜10組程度</li>
          </ul>
        </li>
        <li>フィジカル、デジタルは問いません</li>
        <li>
          子供からお年寄りまで幅広い世代にインクルーシブに行えることが理想ですが、特定のグループをターゲットにした内容でも構いません
        </li>
        <li>
          ワークショップ型、回遊型、プレイ時間などの形態は問いません
        </li>
        <li>
          英語か日本語、もしくはバイリンガルでの募集となります
        </li>
        <li>
          製作費などは自己負担となります /
          交通費・会場費として一律🔴万円の補助があります
        </li>
      </ul>
    </template>
    <template v-else>
      <h5>Entry Format</h5>
      <ul>
        <li>
          Proposals for specific games and games to be
          played in various locations in Kyoto (mainly
          public spaces such as squares, but also public
          facilities, galleries, etc. are acceptable).
          <ul>
            <li>
              One of the two types: Location-specific or
              Location-free.
            </li>
            <li>About 6 to 10 groups total.</li>
          </ul>
        </li>
        <li>Physical or digital games are acceptable.</li>
        <li>
          Ideally, the content should be inclusive to a wide
          range of ages, from children to the elderly, but
          content targeting specific groups is also
          acceptable.
        </li>
        <li>
          Any format is acceptable, including
          workshop-style, circulation-style, play time, etc.
        </li>
        <li>
          We are looking for English, Japanese or bilingual
          applicants.
        </li>
        <li>
          Production and other expenses are to be borne by
          the applicant / A flat subsidy of ¥10,000 will be
          provided to cover transportation and venue
          expenses.
        </li>
      </ul>
    </template>

    <hr />

    <template v-if="locale === 'ja'">
      <h5>ボランティアスタッフについて</h5>
      <div>
        Playtest
        Kyotoでは、ボランティアスタッフの募集をしております。
      </div>
      <ul>
        <li>当日スタッフ</li>
        <li>翻訳・通訳サポート</li>
        <li>インスタグラムなどSNSの発信・広報</li>
        <li>印刷物の配布・送付</li>
        <li>
          デザイナーやクリエイター、場所オーナーとのコミュニケーション
        </li>
      </ul>
      <div>
        など、幅広くスタッフを募集しております。業務内容やボリュームによって時給が出る場合もございます。まずはご連絡いただけますと幸いです。
      </div>
    </template>
    <template v-else>
      <h5>Volunteer Staff</h5>
      <div>
        Playtest Kyoto is looking for volunteer staff!
      </div>
      <ul>
        <li>Staff on the day of the event</li>
        <li>Translation and interpretation support</li>
        <li>Social media</li>
        <li>Distribution of printed materials</li>
        <li>
          Communication with designers, creators, and place
          owners
        </li>
      </ul>
      <div>
        We are looking for a wide range of staff, including
        the above. Hourly rates may be available depending
        on the nature and volume of work. Don't hesitate to
        get in touch with us for more information.
      </div>
    </template>

    <video
      autoplay
      loop
      muted
      playsinline
      class="martop"
      style="height: 200px"
    >
      <source
        src="/images/home/help.mp4"
        type="video/mp4"
      />
    </video>

    <hr />

    <template v-if="locale === 'ja'">
      <h5>寄付・企業協賛のお願い</h5>
      <div>
        Playtest
        Kyotoは、最小限の予算内で、非営利かつインディペンデントな実行委員会により運営されています。そのため、寄付や企業協賛などのサポートを、随時募集しております。寄付いただいた資金は、場所レンタル料やイベント保険、クリエイターへの謝礼などに還元させて頂き、京都市内で活用させて頂きます。何卒ご協力のほど、お願いいたします。
      </div>
    </template>
    <template v-else>
      <h5>Donations and Corporate Sponsorship</h5>
      <div>
        Playtest Kyoto is run by a non-profit, independent
        executive committee with a minimal budget.
        Therefore, we are always looking for donations and
        corporate sponsorships. Donated funds will be used
        to cover location rental fees, event insurance,
        rewards for creators, etc., and will be utilized
        within the city of Kyoto. Thank you in advance for
        your cooperation.
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import * as c from '~/assets/common'
import * as appState from '~/assets/state'
const i18n = useI18n()
const locale = computed(() => i18n.locale.value)
</script>

<style lang="scss" scoped></style>
