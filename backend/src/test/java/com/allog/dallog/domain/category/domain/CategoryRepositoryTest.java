package com.allog.dallog.domain.category.domain;

import static com.allog.dallog.common.fixtures.CategoryFixtures.BE_일정;
import static com.allog.dallog.common.fixtures.CategoryFixtures.BE_일정_이름;
import static com.allog.dallog.common.fixtures.CategoryFixtures.FE_일정;
import static com.allog.dallog.common.fixtures.CategoryFixtures.FE_일정_이름;
import static com.allog.dallog.common.fixtures.CategoryFixtures.공통_일정;
import static com.allog.dallog.common.fixtures.CategoryFixtures.공통_일정_이름;
import static com.allog.dallog.common.fixtures.CategoryFixtures.매트_아고라;
import static com.allog.dallog.common.fixtures.CategoryFixtures.후디_JPA_스터디;
import static com.allog.dallog.common.fixtures.MemberFixtures.관리자;
import static com.allog.dallog.common.fixtures.MemberFixtures.후디;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertAll;

import com.allog.dallog.common.annotation.RepositoryTest;
import com.allog.dallog.domain.member.domain.Member;
import com.allog.dallog.domain.member.domain.MemberRepository;
import java.util.Objects;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Slice;

class CategoryRepositoryTest extends RepositoryTest {

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private MemberRepository memberRepository;

    @DisplayName("페이지와 사이즈와 카테고리 이름을 활용하여 해당하는 카테고리를 조회한다.")
    @Test
    void 페이지와_사이즈와_카테고리_이름을_활용하여_해당하는_카테고리를_조회한다() {
        // given
        Member 관리자 = memberRepository.save(관리자());
        categoryRepository.save(공통_일정(관리자));
        categoryRepository.save(BE_일정(관리자));
        categoryRepository.save(FE_일정(관리자));
        categoryRepository.save(매트_아고라(관리자));
        categoryRepository.save(후디_JPA_스터디(관리자));

        PageRequest pageRequest = PageRequest.of(0, 5);

        // when
        Slice<Category> actual = categoryRepository.findAllLikeCategoryName("일", pageRequest);

        // then
        assertThat(actual.getContent()).hasSize(3)
                .extracting(Category::getName)
                .contains(공통_일정_이름, BE_일정_이름, FE_일정_이름);
    }

    @DisplayName("카테고리 이름 검색 결과가 존재하지 않는 경우 아무것도 조회 하지 않는다.")
    @Test
    void 카테고리_이름_검색_결과가_존재하지_않는_경우_아무것도_조회_하지_않는다() {
        // given
        Member 관리자 = memberRepository.save(관리자());
        categoryRepository.save(공통_일정(관리자));
        categoryRepository.save(BE_일정(관리자));
        categoryRepository.save(FE_일정(관리자));
        categoryRepository.save(매트_아고라(관리자));
        categoryRepository.save(후디_JPA_스터디(관리자));

        PageRequest pageRequest = PageRequest.of(0, 5);

        // when
        Slice<Category> actual = categoryRepository.findAllLikeCategoryName("파랑", pageRequest);

        // then
        assertThat(actual.getContent()).hasSize(0);
    }

    @DisplayName("특정 멤버가 생성한 카테고리를 페이징을 통해 조회한다.")
    @Test
    void 특정_멤버가_생성한_카테고리를_페이징을_통해_조회한다() {
        // given
        Member 관리자 = memberRepository.save(관리자());
        categoryRepository.save(공통_일정(관리자));
        categoryRepository.save(BE_일정(관리자));
        categoryRepository.save(FE_일정(관리자));

        Member 후디 = memberRepository.save(후디());
        categoryRepository.save(후디_JPA_스터디(후디));

        PageRequest pageRequest = PageRequest.of(0, 8);

        // when
        Slice<Category> categories = categoryRepository.findSliceByMemberId(관리자.getId(), pageRequest);

        // then
        assertAll(() -> {
            assertThat(categories.getContent()).hasSize(3)
                    .extracting(Category::getName)
                    .containsExactlyInAnyOrder(공통_일정_이름, BE_일정_이름, FE_일정_이름);
            assertThat(
                    categories.getContent().stream()
                            .map(Category::getCreatedAt)
                            .allMatch(Objects::nonNull))
                    .isTrue();
        });
    }

    @DisplayName("카테고리 id와 회원의 id가 모두 일치하는 카테고리가 있으면 true를 반환한다.")
    @Test
    void 카테고리_id와_회원의_id가_모두_일치하는_카테고리가_있으면_true를_반환한다() {
        // given
        Member 관리자 = memberRepository.save(관리자());
        Category 공통_일정 = categoryRepository.save(공통_일정(관리자));

        // when
        boolean actual = categoryRepository.existsByIdAndMemberId(공통_일정.getId(), 관리자.getId());

        // then
        assertThat(actual).isTrue();
    }

    @DisplayName("카테고리 id와 회원의 id가 모두 일치하는 카테고리가 없으면 false를 반환한다.")
    @Test
    void 카테고리_id와_회원의_id가_모두_일치하는_카테고리가_없으면_false를_반환한다() {
        // given
        Member 관리자 = memberRepository.save(관리자());
        Category 공통_일정 = categoryRepository.save(공통_일정(관리자));

        // when
        boolean actual = categoryRepository.existsByIdAndMemberId(공통_일정.getId(), 0L);

        // then
        assertThat(actual).isFalse();
    }
}
